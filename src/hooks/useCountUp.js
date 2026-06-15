import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Animates every [data-count] number when it scrolls into view.
// Ported from the original epic.js countUp logic.
function countUp(el) {
  const target = +el.dataset.count
  const suf = el.dataset.suffix || ''
  const hasSpan = el.querySelector('.s')
  let cur = 0
  const step = Math.max(1, Math.ceil(target / 45))
  const tick = () => {
    cur = Math.min(target, cur + step)
    const txt = (suf === '%' ? '+' : '') + cur + suf
    if (hasSpan) {
      el.innerHTML = '<span class="s">' + txt + '</span>'
    } else {
      el.textContent = txt
    }
    if (cur < target) requestAnimationFrame(tick)
  }
  tick()
}

export default function useCountUp() {
  const { pathname } = useLocation()
  useEffect(() => {
    const cEls = document.querySelectorAll('[data-count]')
    if (!cEls.length) return
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target)
            co.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    cEls.forEach((el) => co.observe(el))
    return () => co.disconnect()
  }, [pathname])
}
