import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3001
// Where form submissions are delivered.
const TO_EMAIL = process.env.TO_EMAIL || 'epicagencyllc0@gmail.com'

// --- Nodemailer transport (Gmail SMTP) ---------------------------------------
// Requires a Gmail "App Password" (not your normal password). See README.
function makeTransport() {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

const transporter = makeTransport()

function esc(s = '') {
  return String(s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))
}

// --- API: contact / audit form ----------------------------------------------
app.post('/api/contact', async (req, res) => {
  const body = req.body || {}
  const type = body.type === 'newsletter' ? 'newsletter' : 'audit'

  // Basic validation
  if (type === 'audit') {
    if (!body.firstName || !body.email || !body.business) {
      return res.status(400).json({ ok: false, error: 'Missing required fields.' })
    }
  } else if (!body.email) {
    return res.status(400).json({ ok: false, error: 'Email is required.' })
  }

  const subject =
    type === 'newsletter'
      ? `Newsletter signup — ${body.email}`
      : `New audit request — ${body.business || body.firstName}`

  const rows =
    type === 'newsletter'
      ? [['Email', body.email]]
      : [
          ['Name', `${body.firstName || ''} ${body.lastName || ''}`.trim()],
          ['Email', body.email],
          ['Phone', body.phone],
          ['Business', body.business],
          ['Website', body.website],
          ['Industry', body.industry],
          ['Goal', body.goal],
        ]

  const text = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')

  const html = `
    <h2>${esc(subject)}</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px;font-weight:bold;background:#f4f6fb">${esc(k)}</td><td style="padding:6px 12px">${esc(v)}</td></tr>`
        )
        .join('')}
    </table>
    <p style="color:#888;font-size:12px">Sent from the Epic Agency website.</p>`

  // If SMTP isn't configured yet, log the submission so nothing is lost
  // and still return success in development.
  if (!transporter) {
    console.warn('[contact] SMTP not configured — logging submission instead:\n' + text)
    return res.json({ ok: true, delivered: false })
  }

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || `Epic Agency Website <${process.env.SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: body.email,
      subject,
      text,
      html,
    })
    return res.json({ ok: true, delivered: true })
  } catch (err) {
    console.error('[contact] sendMail failed:', err.message)
    return res.status(500).json({ ok: false, error: 'Email delivery failed.' })
  }
})

// --- Serve the built frontend in production ----------------------------------
const distPath = path.join(__dirname, '..', 'dist')
app.use(express.static(distPath))
// SPA fallback: send index.html for any non-API route.
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) res.status(404).send('Build the frontend first: npm run build')
  })
})

app.listen(PORT, () => {
  console.log(`Epic Agency server on http://localhost:${PORT}`)
  console.log(`Form submissions → ${TO_EMAIL}`)
  if (!transporter) {
    console.warn('⚠  SMTP not configured. Copy .env.example to .env and fill it in.')
  }
})
