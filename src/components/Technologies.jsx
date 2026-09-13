import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import YourStack from './YourStack'

const badgeColors = {
  Popular: 'bg-purple-100 text-purple-700',
  Versatile: 'bg-blue-100 text-blue-700',
  Fast: 'bg-emerald-100 text-emerald-700',
  Standard: 'bg-orange-100 text-orange-700',
  'Top SQL': 'bg-blue-100 text-blue-700',
  Cache: 'bg-emerald-100 text-emerald-700',
  Ubiquitous: 'bg-orange-100 text-orange-700',
  Essential: 'bg-blue-100 text-blue-700',
  Robust: 'bg-red-100 text-red-700',
  Modern: 'bg-yellow-100 text-yellow-700',
  Containers: 'bg-emerald-100 text-emerald-700',
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-amber-400">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  )
}

function TechCard({ tech, added, onAdd }) {
  const badgeClass = badgeColors[tech.badge] || 'bg-slate-100 text-slate-600'

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-slate-200 p-4 shadow-sm ${
        added ? 'bg-slate-100 opacity-60' : 'bg-white'
      }`}
    >
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt="" className={`h-9 w-9 ${added ? 'grayscale' : ''}`} />
        {tech.badge ? (
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${badgeClass}`}>
            {tech.badge}
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 text-[15px] font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">{tech.description}</p>

      <hr className="my-3 border-slate-200" />

      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-[10px] text-slate-500">{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-[11px] font-medium text-slate-700">
          <StarIcon />
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => (added ? toast.error(`${tech.name} is already in your stack`) : onAdd(tech))}
        aria-disabled={added}
        className={`mt-auto w-full rounded-lg py-2 text-[11px] font-semibold transition ${
          added
            ? 'cursor-not-allowed bg-slate-900 text-white'
            : 'bg-gradient-brand text-white hover:brightness-110'
        }`}
      >
        {added ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

function Technologies({ stack, onAdd, onRemove, onRemoveAll }) {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 pb-28 pt-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Explore the <span className="text-gradient">Technologies</span>
        </h2>
        <p className="mt-1 text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-500" />
        </div>
      ) : (
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                added={stack.some((item) => item.id === tech.id)}
                onAdd={onAdd}
              />
            ))}
          </div>
          <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      )}
    </section>
  )
}

export default Technologies