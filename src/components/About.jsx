import { HiAcademicCap, HiBriefcase, HiHeart } from 'react-icons/hi'

const cards = [
  {
    icon: HiAcademicCap,
    title: 'Education',
    content: 'B.Tech in Computer Science & Engineering',
    iconBg: 'bg-blue-600',
  },
  {
    icon: HiBriefcase,
    title: 'Experience',
    content: 'Full Stack Projects and AI Applications',
    iconBg: 'bg-teal-600',
  },
  {
    icon: HiHeart,
    title: 'Interests',
    content: [
      'Full Stack Development',
      'Artificial Intelligence',
      'Machine Learning',
    ],
    iconBg: 'bg-sky-600',
  },
]

function About() {
  return (
    <section id="about" className="py-20 sm:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading mx-auto">
            I am a passionate developer interested in Full Stack Development and
            Artificial Intelligence. I enjoy creating modern applications and
            AI-based systems that solve real-world problems. I continuously improve
            my skills and learn new technologies.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="card group p-6 transition-transform hover:-translate-y-1 sm:p-8"
            >
              <div
                className={`mb-4 inline-flex rounded-xl ${card.iconBg} p-3 text-white shadow-lg`}
              >
                <card.icon className="h-6 w-6" />
              </div>
              <h3
                className="mb-3 text-lg font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                {card.title}
              </h3>
              {Array.isArray(card.content) ? (
                <ul className="space-y-2">
                  {card.content.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {card.content}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
