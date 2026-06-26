import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from 'react-icons/fa6'

const quickLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Profiles', to: 'coding-profiles' },
  { name: 'Contact', to: 'contact' },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:ankitkumar@example.com', label: 'Email' },
]

/**
 * Site footer with social links, quick navigation, and copyright
 */
function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="section-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-3 text-2xl font-bold">
              <span className="gradient-text">Kumar</span>
              <span style={{ color: 'var(--text-primary)' }}>.</span>
            </p>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Full Stack Developer & AI Engineer building scalable applications and
              intelligent solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="mb-4 text-sm font-bold tracking-wider uppercase"
              style={{ color: 'var(--text-primary)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy
                    smooth
                    duration={500}
                    offset={-80}
                    className="cursor-pointer text-sm transition-colors hover:text-teal-500"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="mb-4 text-sm font-bold tracking-wider uppercase"
              style={{ color: 'var(--text-primary)' }}
            >
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all hover:-translate-y-1 hover:border-teal-500 hover:text-teal-500"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-tertiary)',
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-10 border-t pt-8 text-center text-sm"
          style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
        >
          © 2026 Ankit Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
