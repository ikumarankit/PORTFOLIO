import { FaExternalLinkAlt } from 'react-icons/fa'
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
  SiGithub,
} from 'react-icons/si'

const profiles = [
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    username: 'ikumarankit',
    url: 'https://leetcode.com/u/ikumarankit',
    color: '#FFA116',
    description: 'Solving DSA problems and improving algorithmic thinking.',
  },
  {
    name: 'GeeksforGeeks',
    icon: SiGeeksforgeeks,
    username: 'ikumarankit',
    url: 'https://www.geeksforgeeks.org/user/ikumarankit',
    color: '#2F8D46',
    description: 'Practicing data structures and exploring computer science concepts.',
  },
  {
    name: 'CodeForces',
    icon: SiCodeforces,
    username: 'ikumarankit',
    url: 'https://codeforces.com/profile/ikumarankit',
    color: '#1F8ACB',
    description: 'Competing in rated contests and solving competitive problems.',
  },
  {
    name: 'CodeChef',
    icon: SiCodechef,
    username: 'ikumarankit',
    url: 'https://www.codechef.com/users/ikumarankit',
    color: '#5B4638',
    description: 'Participating in coding contests and challenges.',
  },
  {
    name: 'HackerRank',
    icon: SiHackerrank,
    username: 'ikumarankit',
    url: 'https://www.hackerrank.com/profile/ikumarankit',
    color: '#00EA64',
    description: 'Earning badges and solving domain-specific challenges.',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    username: 'ikumarankit',
    url: 'https://github.com/ikumarankit',
    color: '#6e40c9',
    description: 'Building open-source projects and contributing to the community.',
  },
]

function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="py-20 sm:py-28"
      style={{ backgroundColor: 'var(--bg-tertiary)' }}
    >
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Coding Profiles</h2>
          <p className="section-subheading mx-auto">
            A collection of coding profiles that reflect my passion for problem-solving and growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              id={`profile-${profile.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="card group flex flex-col p-6 transition-transform hover:-translate-y-2"
              style={{ textDecoration: 'none' }}
            >
              {/* Icon badge */}
              <div className="mb-5 flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: profile.color }}
                >
                  <profile.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <span className="gradient-text">{profile.name}</span>
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    @{profile.username}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className="mb-5 flex-1 text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {profile.description}
              </p>

              {/* CTA */}
              <div
                className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all group-hover:border-teal-500 group-hover:text-teal-500"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              >
                <FaExternalLinkAlt className="h-3.5 w-3.5" />
                Visit Profile
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
