# Epic Agency — React

The Epic Agency marketing site, converted from static HTML to **React (Vite + React Router)**, with a small **Express + Nodemailer** backend that emails contact-form submissions to **epicagencyllc0@gmail.com**.

## Project structure

```
epicagency-react/
├── index.html              # Vite entry HTML (fonts, root div)
├── vite.config.js          # dev server + /api proxy to the backend
├── public/images/          # all site images
├── src/
│   ├── main.jsx            # React entry
│   ├── App.jsx             # routes
│   ├── styles.css          # the original epic.css (unchanged)
│   ├── components/         # Header, Footer, Layout, Faq, Icons, Shared
│   ├── hooks/              # useReveal, useCountUp (scroll animations)
│   └── pages/              # Home, About, Services, Industries, Results, Contact, Blog
└── server/
    └── index.js            # Express API (/api/contact) + Nodemailer
```

Routes: `/` `/about` `/services` `/industries` `/results` `/contact` `/insights`

## 1. Install

```bash
npm install
```

## 2. Configure email delivery

The contact form (and newsletter signup) POST to `/api/contact`, which the
server emails to your inbox. To enable real delivery:

```bash
cp .env.example .env
```

Then edit `.env` and set a **Gmail App Password** (full steps are in the file):

1. Turn on 2-Step Verification: https://myaccount.google.com/security
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Paste the 16-character password as `SMTP_PASS`.

> Until SMTP is configured, the server still accepts submissions and logs them
> to the console (nothing breaks), so you can develop the UI without credentials.

## 3. Run in development

Run frontend + backend together:

```bash
npm run dev:all
```

- Frontend: http://localhost:5173 (Vite proxies `/api` → backend)
- Backend:  http://localhost:3001

Or run them separately with `npm run dev` and `npm run dev:server`.

## 4. Production

```bash
npm run build      # builds the frontend into dist/
npm start          # Express serves dist/ AND the /api/contact endpoint on :3001
```

Then open http://localhost:3001.

## Notes

- The original files (`*.html`, `epic.css`, `epic.js`) are untouched in the
  sibling `epicagency/` folder. This project is a clean React port of them.
- Phone numbers `(000) 000-0000` and the `hello@epic.agency` placeholders from
  the original design are preserved; the contact email was switched to
  `epicagencyllc0@gmail.com`. Update the phone/social links when ready.
- Scroll-reveal and number count-up animations from `epic.js` are reimplemented
  as React hooks; the FAQ accordion and service tabs are React state.
