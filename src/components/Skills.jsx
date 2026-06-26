const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'EJS', 'JWT authentication'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Programming',
    skills: ['Java', 'JavaScript', 'Python'],
  },
  {
    title: 'AIML',
    skills: ['Machine Learning basic'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub'],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28"
      style={{ backgroundColor: 'var(--bg-tertiary)' }}
    >
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Skills</h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with to build modern web applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card p-6 transition-transform hover:-translate-y-1"
            >
              <h3
                className="mb-5 border-b pb-3 text-lg font-bold"
                style={{
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <span className="gradient-text">{category.title}</span>
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-xl border px-3.5 py-2 text-sm font-medium shadow-sm transition-shadow hover:shadow-md"
                    style={{
                      borderColor: 'var(--border-color)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-600" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
