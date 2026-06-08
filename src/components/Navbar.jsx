import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Profiles', to: 'coding-profiles' },
  { name: 'Contact', to: 'contact' },
]

function Navbar({ darkMode, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.to)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b backdrop-blur-xl' : 'bg-transparent'
      }`}
      style={{
        borderColor: scrolled ? 'var(--border-color)' : 'transparent',
        backgroundColor: scrolled
          ? darkMode
            ? 'rgba(30, 41, 59, 0.85)'
            : 'rgba(255, 255, 255, 0.85)'
          : 'transparent',
      }}
    >
      <nav className="section-container flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link
          to="home"
          spy
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer text-xl font-bold tracking-tight sm:text-2xl"
          onClick={closeMobile}
        >
          <span className="gradient-text">Kumar</span>
          <span style={{ color: 'var(--text-primary)' }}>.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy
                smooth
                duration={500}
                offset={-80}
                className="relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors"
                style={{
                  color:
                    activeSection === link.to
                      ? 'var(--text-primary)'
                      : 'var(--text-muted)',
                }}
                onSetActive={() => setActiveSection(link.to)}
              >
                {link.name}
                {activeSection === link.to && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-teal-600" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              color: 'var(--text-primary)',
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="overflow-hidden border-b backdrop-blur-xl md:hidden"
          style={{
            borderColor: 'var(--border-color)',
            backgroundColor: darkMode
              ? 'rgba(30, 41, 59, 0.95)'
              : 'rgba(255, 255, 255, 0.95)',
          }}
        >
          <ul className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy
                  smooth
                  duration={500}
                  offset={-80}
                  className="block cursor-pointer rounded-xl px-4 py-3 text-base font-medium tracking-wider uppercase transition-colors"
                  style={{
                    color:
                      activeSection === link.to
                        ? 'var(--text-primary)'
                        : 'var(--text-muted)',
                    backgroundColor:
                      activeSection === link.to ? 'var(--bg-tertiary)' : 'transparent',
                  }}
                  onClick={closeMobile}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
