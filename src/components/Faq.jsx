import { useState, useRef } from 'react'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  return (
    <div className={'q-item' + (open ? ' open' : '')}>
      <div className="q-q" onClick={() => setOpen((v) => !v)}>
        {q} <span className="pm"></span>
      </div>
      <div
        className="q-a"
        ref={ref}
        style={{ maxHeight: open && ref.current ? ref.current.scrollHeight + 'px' : null }}
      >
        <p>{a}</p>
      </div>
    </div>
  )
}

// items: [{ q, a }]
export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((it, i) => (
        <FaqItem key={i} q={it.q} a={it.a} />
      ))}
    </div>
  )
}
