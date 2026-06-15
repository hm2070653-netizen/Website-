// Reusable SVG icons. JSX requires camelCased SVG attributes
// (strokeWidth, strokeLinecap, etc.) and self-closing tags.

export const Check = ({ stroke = '#FF6400', strokeWidth = 2.4 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth}>
    <path d="m5 13 4 4L19 7" />
  </svg>
)

export const Phone = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.1 2.2z" />
  </svg>
)

export const PhoneLine = ({ stroke = '#0A4488', strokeWidth = 1.8 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth}>
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.1 2.2z" />
  </svg>
)

export const Shield = ({ stroke = '#FF6400', strokeWidth = 2, fill = 'none' }) => (
  <svg viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
    <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

// Camera / image placeholder badge used inside .img-ph blocks
export const PhotoIcon = ({ stroke }) => (
  <svg viewBox="0 0 24 24" stroke={stroke}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="11" r="2" />
    <path d="m3 17 5-4 4 3 3-2 6 4" />
  </svg>
)

export const ArrowUpRight = () => <span className="arr">↗</span>

// Footer social icons
export const Facebook = () => (
  <svg viewBox="0 0 24 24">
    <path d="M13 22v-8h3l1-4h-4V8c0-1 .3-2 2-2h2V2.5C18 2.4 17 2 15.7 2 13 2 11 3.7 11 6.7V10H8v4h3v8z" />
  </svg>
)

export const Instagram = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.3.6.4 1.3.5 2.3 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6s-1 .8-1.6 1c-.6.3-1.3.4-2.3.5-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1s-.8-1-1-1.6c-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6s1-.8 1.6-1c.6-.3 1.3-.4 2.3-.5C8.6 2 9 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.3-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
  </svg>
)

export const LinkedIn = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6.9 8.5H3.6V21h3.3V8.5zM5.2 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM21 21h-3.3v-6.1c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H10V8.5h3.1v1.7h.1c.5-.8 1.6-1.7 3.2-1.7 3.4 0 4.6 2.3 4.6 5.2V21z" />
  </svg>
)
