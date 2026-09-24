import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa6'
import resumePdf from '../assets/resume.pdf'
import profileImg from '../assets/images/profile.jpeg'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/ikumarankit', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ikumarankit18/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:kumarankit993888@gmail.com', label: 'Email' },
]

const particles = Array.from({ length: 100 }, (_, i) => ({
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
      {/* Particles background */}
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

      {/* Main two-column layout */}
      <div className="section-container relative flex min-h-[calc(100vh-6rem)] items-center">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Photo Column (appears first on mobile) ── */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="hero-photo-wrapper relative">
              {/* Decorative floating blobs behind the photo */}
              <div className="hero-blob hero-blob-1" />
              <div className="hero-blob hero-blob-2" />

              {/* Square photo card */}
              <div className="hero-photo-card">
                <img
                  src={profileImg}
                  alt="Ankit Kumar"
                  className="hero-photo"
                  loading="eager"
                />
                {/* Corner accents */}
                <span className="hero-corner hero-corner-tl" />
                <span className="hero-corner hero-corner-br" />
              </div>

              {/* Floating badge */}
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                <span className="text-xs font-semibold">Open to Work</span>
              </div>
            </div>
          </div>

          {/* ── Text Column ── */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <p className="mb-3 text-sm tracking-wider font-bold text-teal-600 uppercase dark:text-teal-400 sm:text-2xl">
              Hello, I&apos;m
            </p>

            <h1
              className="mb-4 text-3xl font-semibold uppercase tracking-tight sm:text-4xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Ankit Kumar
            </h1>

            <p className="mb-6 text-xl font-semibold uppercase sm:text-2xl gradient-text">
              I am full stack developer and problem solver.
            </p>

            <p
              className="mb-8 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              Building the Web. Exploring AI. Shaping Whats Next. <br></br>
              Passionate about web development and constantly learning how to integrate AI into modern digital experiences.
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
        </div>
      </div>
    </section>
  )
}

export default Hero
