import React, { useState} from "react"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"


function App(){
  const [user, setUser] = useState({});
  
  console.log('Logged in user ..............................');
  console.log(user);

  return(
    <div>
    <Router>
        <Routes>
          <Route path="/Login" element={<Login setUser={setUser}/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Dashboard" element={<Dashboard user={user}/>}/>
          <Route path="/" element={<Navbar/>}/>
        </Routes>
    </Router>
    </div>
  )
}

export default App;