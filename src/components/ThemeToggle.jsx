import { HiSun, HiMoon } from 'react-icons/hi'

function ThemeToggle({ darkMode, toggleTheme, className = '' }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors hover:border-teal-500 ${className}`}
      style={{
        borderColor: 'var(--border-color)',
        backgroundColor: 'var(--bg-tertiary)',
        color: 'var(--text-primary)',
      }}
    >
      {darkMode ? (
        <HiSun className="h-5 w-5 text-amber-400" />
      ) : (
        <HiMoon className="h-5 w-5 text-teal-600" />
      )}
    </button>
  )
}

export default ThemeToggle
