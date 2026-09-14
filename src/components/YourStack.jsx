function XIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 fill-slate-400">
      <path d="M5.6 5.6a.9.9 0 0 1 1.3 0L10 8.7l3.1-3.1a.9.9 0 1 1 1.3 1.3L11.3 10l3.1 3.1a.9.9 0 1 1-1.3 1.3L10 11.3l-3.1 3.1a.9.9 0 0 1-1.3-1.3L8.7 10 5.6 6.9a.9.9 0 0 1 0-1.3z" />
    </svg>
  )
}

function YourStack({ stack, onRemove, onRemoveAll }) {
  const label =
    stack.length === 1 ? '1 Technology Selected' : `${stack.length} Technologies Selected`

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:w-64 lg:shrink-0 lg:self-start">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-500">
        {stack.length === 0 ? 'No technologies selected yet.' : label}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 rounded-xl border-2 border-dashed border-slate-200 py-10 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <ul className="mt-4 space-y-3">
            {stack.map((tech) => (
              <li key={tech.id} className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
                <img src={tech.icon} alt="" className="h-10 w-10 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="shrink-0 rounded-lg p-1 hover:bg-slate-100"
                  aria-label={`Remove ${tech.name}`}
                >
                  <XIcon />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border-2 border-red-300 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default YourStack