import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import project1 from '../assets/images/Wanderlust.png'
import project2 from '../assets/images/HostelCare.png'
import project3 from '../assets/images/project-chat.svg'

const projects = [
  {
    title: 'Wanderlust - Airbnb Clone',
    description:
      'A full-stack property rental platform inspired by Airbnb, featuring property discovery, detailed listings, user authentication, and a responsive modern interface. Built with a focus on smooth user experience, reusable components, and efficient data management.',
    tech: ['MongoDb', 'Express.js', 'React', 'Tailwind ', 'Node.js', 'EJS'],
    image: project1,
    github: 'https://github.com/ikumarankit/Wanderlust-An-Airbnb-Clone'
  },
  {
    title: 'HostelCare - Hostel issue management system',
    description:
      'HostelCare provides a centralized platform where hostelers can register complaints and track their status in real-time. The system automatically assigns complaints to floor-wise rectors,ensuring that each issue is handled by the appropriate authority.',
    tech: ['MongoDb', 'Express.js', 'React', 'Tailwind', 'Node.js', 'JWT Authentication', 'R-BAC'],
    image: project2,
    github: 'https://github.com/ikumarankit/HostelCare',
    demo: 'https://hostel-care-lilac.vercel.app/',
  },
  {
    title: 'Planora - AI Powered Project Management Platform',
    description:
      'The AI Powered Project Management Platform is a full-stack web application that helps individuals and teams plan, organize, monitor, and complete software or business projects.',
    tech: ['MongoDb', 'Express.js', 'React', 'Tailwind ', 'Node.js', 'TypeScript', 'JWT Authentication', 'R-BAC'],
    image: project3,
    github: 'https://github.com/ikumarankit/Planora'
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading mx-auto">
            Turning ideas into practical web applications, one project at a time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card group flex flex-col overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={400}
                  height={192}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="mb-2 text-lg font-bold leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-4 flex-1 text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg px-2.5 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-teal-500"
                    style={{
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                  >
                    <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
