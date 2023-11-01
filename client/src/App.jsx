import React from "react"
import { BrowserRouter as Router, Routes } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Routes path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
