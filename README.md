# Ankit Kumar — Portfolio Website

Modern, premium, fully responsive single-page portfolio for a **Full Stack Developer & AI Engineer**, built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** v4
- **Framer Motion** — animations
- **React Icons** — icons
- **React Scroll** — smooth navigation
- **React Typed** — typing animation
- **EmailJS** — contact form
- **localStorage** — theme persistence

## Installation

```bash
# Clone or open the project folder, then:
npm install
```

### Required packages (already in package.json)

```bash
npm install framer-motion react-icons react-scroll react-typed @emailjs/browser
npm install -D tailwindcss @tailwindcss/vite
```

## Environment Variables (EmailJS)

1. Copy the example file:

```bash
cp .env.example .env
```

2. Add your EmailJS credentials from [https://www.emailjs.com/](https://www.emailjs.com/):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS template variables

Create an EmailJS template with these variables (must match the form field names):

| Variable     | Description      |
|-------------|------------------|
| `from_name` | Sender full name |
| `from_email`| Sender email     |
| `subject`   | Email subject    |
| `message`   | Email body       |

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Go to [https://vercel.com](https://vercel.com) → **Add New Project**.
3. Import your repository.
4. Vercel auto-detects Vite. Default settings work:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add environment variables in Vercel → **Settings → Environment Variables**:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Deploy.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx
│   ├── ScrollToTop.jsx
│   └── ThemeToggle.jsx
├── assets/
│   ├── images/
│   ├── icons/
│   └── resume.pdf
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

| Item | Location |
|------|----------|
| Profile photo | Replace `src/assets/images/profile.svg` |
| Resume | Replace `src/assets/resume.pdf` |
| Project images | `src/assets/images/project-*.svg` |
| Social / GitHub links | `Hero.jsx`, `Footer.jsx`, `Projects.jsx` |
| Contact details | `Contact.jsx` |
| Email | `Contact.jsx`, `Hero.jsx` |

## Features

- Fully responsive (mobile, tablet, desktop)
- Light theme by default, dark mode toggle
- Theme saved in `localStorage`
- Smooth scrolling & active section highlighting
- Sticky navbar with blur on scroll
- Loading screen animation
- Scroll-to-top button
- EmailJS contact form with validation
- Framer Motion scroll & hover animations

## License

MIT — free to use and modify for your personal portfolio.
