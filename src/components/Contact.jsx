import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  HiMail,
  HiLocationMarker,
  HiCheckCircle,
  HiXCircle,
} from 'react-icons/hi'

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'kumarankit993888@gmail.com',
    href: 'mailto:kumarankit993888@gmail.com',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Gujarat, India',
    href: null,
  },
]

const initialForm = {
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const validate = () => {
    const newErrors = {}
    if (!form.from_name.trim()) newErrors.from_name = 'Full name is required'
    if (!form.from_email.trim()) {
      newErrors.from_email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
      newErrors.from_email = 'Enter a valid email address'
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      await emailjs.send(serviceId, templateId, form, publicKey)
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) =>
    `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-teal-500/40 ${
      errors[field] ? 'border-red-500' : ''
    }`

  const getInputStyle = (field) => ({
    backgroundColor: 'var(--bg-tertiary)',
    borderColor: errors[field] ? '#ef4444' : 'var(--border-color)',
    color: 'var(--text-primary)',
  })

  return (
    <section
      id="contact"
      className="py-20 sm:py-28"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-subheading mx-auto">
            Have a project in mind? Let&apos;s connect and build something great together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="card flex items-start gap-4 p-5">
                <div className="rounded-xl bg-teal-600 p-3 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-semibold transition-colors hover:text-teal-500"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="card space-y-5 p-6 sm:p-8"
            noValidate
          >
            <div>
              <label htmlFor="from_name" className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                Full Name
              </label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                value={form.from_name}
                onChange={handleChange}
                className={inputClass('from_name')}
                style={getInputStyle('from_name')}
                placeholder="Your full name"
              />
              {errors.from_name && (
                <p className="mt-1 text-xs text-red-500">{errors.from_name}</p>
              )}
            </div>

            <div>
              <label htmlFor="from_email" className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                Email
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                value={form.from_email}
                onChange={handleChange}
                className={inputClass('from_email')}
                style={getInputStyle('from_email')}
                placeholder="you@example.com"
              />
              {errors.from_email && (
                <p className="mt-1 text-xs text-red-500">{errors.from_email}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className={inputClass('subject')}
                style={getInputStyle('subject')}
                placeholder="Project inquiry"
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass('message')} resize-none`}
                style={getInputStyle('message')}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>

      {status && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={() => setStatus(null)}
          role="presentation"
        >
          <div
            className="card max-w-sm p-8 text-center"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {status === 'success' ? (
              <>
                <HiCheckCircle className="mx-auto mb-4 h-16 w-16 text-emerald-500" />
                <h3 className="mb-2 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </>
            ) : (
              <>
                <HiXCircle className="mx-auto mb-4 h-16 w-16 text-red-500" />
                <h3 className="mb-2 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Something went wrong
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Please check your EmailJS configuration in .env or try again later.
                </p>
              </>
            )}
            <button
              type="button"
              onClick={() => setStatus(null)}
              className="mt-6 rounded-xl bg-teal-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact
