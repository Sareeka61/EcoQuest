import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Navbar from './components/Navbar'
import Userinfo from './components/Userinfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Navbar />
      <Userinfo/>
      </>
  )
}

export default App
