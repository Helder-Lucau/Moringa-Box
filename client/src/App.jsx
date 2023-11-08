import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from "./components/Contact"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App

