import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa6'
import resumePdf from '../assets/resume.pdf'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/ikumarankit', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ikumarankit18/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:kumarankit993888@gmail.com', label: 'Email' },
]

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 5 + 2,
  delay: Math.random() * 2,
  duration: Math.random() * 3 + 3,
}))

function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative min-h-screen overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle absolute rounded-full bg-teal-500/30 dark:bg-teal-400/20"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative flex min-h-[calc(100vh-6rem)] max-w-3xl flex-col justify-center">
        <p className="mb-3 text-sm tracking-wider text-teal-600 uppercase dark:text-teal-400">
          Hello, I&apos;m
        </p>

        <h1
          className="mb-4 text-3xl font-semibold tracking-tight sm:text-5xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Ankit Kumar
        </h1>

        <p className="mb-6 text-xl font-semibold sm:text-2xl gradient-text">
          I am full stack developer and problem solver.
        </p>

        <p
          className="mb-8 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          Passionate developer focused on building scalable web applications and
          intelligent AI-powered solutions that solve real-world problems.
        </p>

        <div className="mb-8 flex flex-wrap gap-4">
          <a
            href={resumePdf}
            download="Ankit_Kumar_Resume.pdf"
            className="btn-primary"
          >
            <FaDownload className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-xl border transition-colors hover:border-teal-500 hover:text-teal-600"
              style={{
                borderColor: 'var(--border-color)',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
              }}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
