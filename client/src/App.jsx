import React from "react"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"


function App(){

  return(
    <div>
    <Router>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Navbar/>}/>
        </Routes>
    </Router>
    </div>
  )
}

export default App;