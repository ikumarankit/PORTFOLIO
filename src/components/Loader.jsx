function Loader() {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span
          className="loader-spinner absolute inset-0 rounded-2xl border-2 border-teal-500"
          style={{ borderTopColor: 'transparent' }}
        />
        <span className="text-2xl font-bold gradient-text">K.</span>
      </div>

      <p
        className="mt-6 text-sm font-medium tracking-widest uppercase"
        style={{ color: 'var(--text-muted)' }}
      >
        Loading portfolio
      </p>

      <div
        className="mt-4 h-1 w-32 overflow-hidden rounded-full"
        style={{ backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="loader-progress h-full rounded-full bg-teal-600" />
      </div>
    </div>
  )
}

export default Loader
