function HeroArt() {
  return (
    <div
      className="-mx-4 flex justify-center overflow-hidden sm:-mx-6 lg:mx-0 lg:overflow-visible lg:flex-1 lg:justify-end"
      aria-hidden="true"
    >
      <img src="/banner-stack.png" alt="" className="w-[140%] sm:w-[120%] max-w-none lg:w-full" />
    </div>
  )
}

function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-10 lg:flex-row lg:gap-12 lg:px-8 lg:py-16">
      <div className="text-center lg:w-[45%] lg:text-left">
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          Build your ideal
          <span className="block text-gradient">Development Stack</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Explore frontend, backend, database, and tooling options, compare them side by side, and
          build the perfect technology stack for your next project.
        </p>
        <div className="mt-8 flex items-center gap-3 sm:justify-center lg:justify-start">
          <a href="#" className="w-full rounded-full bg-gradient-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:brightness-110 sm:w-auto">
            Explore Technologies
          </a>
          <a href="#" className="w-full rounded-full border-2 border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:border-violet-400 hover:text-violet-600 sm:w-auto">
            Learn More
          </a>
        </div>
      </div>
      <HeroArt />
    </section>
  )
}

export default Hero