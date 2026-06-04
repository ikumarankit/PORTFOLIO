import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi'
import { animateScroll as scroll } from 'react-scroll'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white shadow-lg shadow-slate-900/15 transition-colors hover:bg-teal-700"
    >
      <HiArrowUp className="h-5 w-5" />
    </button>
  )
}

export default ScrollToTop
