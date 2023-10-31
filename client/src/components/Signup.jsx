import React, { useState } from "react";
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log("Event:", e);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        alert('Account created successfully!')
        setFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <div className="signup-popup">
                    <div className="signup-popup-content">
                        <h2>Create an M-<span>Box</span> Account</h2>
                        <form onSubmit={handleSignup}>
                            <label>
                                Name:
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </label>
                            <label>
                                Password:
                                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                            </label>
                            <button type="submit">Sign Up</button>
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
