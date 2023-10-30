import React,{useState} from "react";
import './Signup.css'

const Signup=(e)=>{
    const[formdata,setFormdata]=useState({
        username:'',
        email:'',
        password:'',
    });

    const handleChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();//prevennting the page from reloading once forms are filled.
        //Link to the database.
    }

    return(
        <div className="popup">
            <div className="pop-content">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="Username"
                    value={formdata.username}
                    onChange={handleChange}
                    placeholder="Username"
                    />
                    <input
                    type="email"
                    name="Email"
                    value={formdata.email}
                    onChange={handleChange}
                    placeholder="Email"
                    />
                    <input
                    type="password"
                    name="Password"
                    value={formdata.password}
                    onChange={handleChange}
                    placeholder="Password"
                    />
                    <button type="submit">SignUp</button>
                </form>
            </div>
        </div>
    )

}
export default Signup;