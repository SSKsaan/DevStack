import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'

function App() {
  const [stack, setStack] = useState([])

  const addToStack = (tech) => {
    setStack((prev) => (prev.some((item) => item.id === tech.id) ? prev : [...prev, tech]))
  }

  const removeFromStack = (id) => {
    setStack((prev) => prev.filter((item) => item.id !== id))
  }

  const clearStack = () => {
    setStack([])
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Technologies
          stack={stack}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={clearStack}
        />
      </main>
    </div>
  )
}

export default App