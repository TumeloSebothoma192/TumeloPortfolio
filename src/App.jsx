import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import ThreeBackground from './components/ThreeBackground'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <ThreeBackground />
    <Hero />
  </>
  )
}
export default App
