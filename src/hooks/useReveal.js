import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Adds the `in` class to every `.reveal` element as it scrolls into view.
// Re-runs on route changes so freshly mounted page content animates too.
export default function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            ro.unobserve(e.target)
          }
        })
      },
      { threshold: 0.14 }
    )
    els.forEach((el) => ro.observe(el))
    return () => ro.disconnect()
  }, [pathname])
}
