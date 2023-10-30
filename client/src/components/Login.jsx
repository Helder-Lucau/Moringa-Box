import React,{useState} from "react";
import "./Login.css"
import { Link } from 'react-router-dom';




const Login=()=>{
    const [formdata,setFormdata]=useState({
        email:'',
        password:'',
    });

    const handleChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault()//prevent reloading of page once input fields are filled

        //Link to the database.
    }

    return(
        <div className="popup">
            <div className="popup-content">
                <h2>M-<span>Box</span></h2>
                <h5>Login To Your Account</h5>
                <form onSubmit={handleSubmit}>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="Email"
                            value={formdata.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="Password"
                            value={formdata.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                    </label>
                    
                    
                    
                    <button type="submit">Login</button>

                    <p>Don't have an account?<Link to="/Signup">Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Login;