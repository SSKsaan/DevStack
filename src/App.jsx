import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

function App() {
  const [stack, setStack] = useState([])

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack`)
  }

  const removeFromStack = (id) => {
    const tech = stack.find((item) => item.id === id)
    setStack((prev) => prev.filter((item) => item.id !== id))
    toast.success(`${tech.name} removed from your stack`)
  }

  const clearStack = () => {
    setStack([])
    toast.success('All technologies removed from your stack')
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
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  )
}

export default App