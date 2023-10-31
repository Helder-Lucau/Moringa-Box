import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Event:", e);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    alert("Welcome back!");
    setFormData({
        name: '',
        email: '',
        password: '',
    });
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="login-popup">
          <div className="login-popup-content">
            <h2>M-<span>Box</span></h2>
            <h5>Login To Your Account</h5>
            <form onSubmit={handleLogin}>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit">Login</button>
              <p>
                Don't have an account? <a href="/Signup">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
