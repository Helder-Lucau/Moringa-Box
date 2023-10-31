import React,{useState} from "react";
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup=()=>{
    const[formData,setFormData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
    });

    const handleChange=(e)=>{
        
        setFormData({...formData,[e.target.name]:e.target.value});
        console.log("Event:", e);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
        
    };


    return(
        <div className="signup-popup">
            <div className="signup-popup-content">
                <h2>Create an M-<span>Box</span> Account</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        FirstName:
                        <input
                        type="text"
                        name="FirstName"
                        value={formData.firstname}
                        onChange={handleChange}
                        
                    />
                    </label>
                    <label>
                        LastName:
                        <input
                            type="text"
                            name="LastName"
                            value={formData.lastname}
                            onChange={handleChange}
                            
                    />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="Email"
                            value={formData.email}
                            onChange={handleChange}
                            
                    />
                    </label>
                    <label>
                        Password:
                        <input
                        type="password"
                        name="Password"
                        value={formData.password}
                        onChange={handleChange}
                        
                    />
                    </label>
                    
                   
                    
                    
                    <button type="submit">Sign Up</button>

                    <p>Already have an account?<Link to="/Login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup;
