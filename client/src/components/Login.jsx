import React,{useState} from "react";
import "./Login.css"



const Login=()=>{
    const [formdata,setFormdata]=useState({
        username:'',
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
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="username"
                    value={formdata.username}
                    onChange={handleChange}
                    placeholder="Username"
                    />
                    <input
                    type="password"
                    name="Password"
                    value={formdata.password}
                    onChange={handleChange}
                    placeholder="Password"
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;