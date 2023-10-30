import Login from "./components/Login.jsx";
import React from "react";
import Signup from "./components/Signup.jsx";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App(){

  return(
    <Router>
      <div>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;