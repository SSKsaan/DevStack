function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <h1 className="flex items-center gap-2 text-lg font-bold text-black">
          <img src="/favicon.svg" alt="Dev Stack logo" className="h-6 w-6" />
          <span className="flex items-baseline gap-1 whitespace-nowrap">
            <span>Dev</span>
            <span className="text-gradient">Stack</span>
          </span>
        </h1>
      </header>
      <main></main>
    </div>
  )
}

export default App