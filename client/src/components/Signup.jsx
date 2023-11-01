import React, { useState, useEffect } from "react";
import { Link ,useNavigate} from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import "./Signup.css"

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });

    // Schema for form validation
    const formSchema = yup.object().shape({
        firstname: yup.string().required("First Name is required"),
        lastname: yup.string().required("Last Name is required"),
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log("Form Submitted:", values);

            // Show success alert
            Swal.fire({
                title: "Success!",
                text: "M-Box account created successfully!",
                icon: "success",
                confirmButtonText: "Nice",
                confirmButtonColor: "#f1cc17",
            });
            navigate('/login');

            // Clear form data
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
            });
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching data...................................");
            console.log(formData);
            console.log("Fetching formik data...................................");
            console.log(formik.values);
            try {
                const response = await fetch("http://127.0.0.1:5555/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formik.values),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Fetch successful:", data);
                } else {
                    console.error("Error fetching data:", response.statusText);
                }
            } catch (error) {
                console.error("Network error:", error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, [formData]);

    return (
        <div className="popup">
            <div className="popup-content">
                <div className="signup-popup">
                    <div className="signup-popup-content">
                        <h2>Create an M-<span>Box</span> Account</h2>
                        <form onSubmit={formik.handleSubmit}>
    <label>
        First Name:
        <input 
            type="text" 
            name="firstname" 
            value={formik.values.firstname}  // Updated field name here
            onChange={formik.handleChange} 
            required 
        />
    </label>
    {formik.touched.firstname && formik.errors.firstname ? <div style={{ color: "red" }}>{formik.errors.firstname}</div> : null}
    <label>
        Last Name:
        <input 
            type="text" 
            name="lastname" 
            value={formik.values.lastname}  // Updated field name here
            onChange={formik.handleChange} 
            required 
        />
    </label>
    {formik.touched.lastname && formik.errors.lastname ? <div style={{ color: "red" }}>{formik.errors.lastname}</div> : null}
    <label>
        Email:
        <input 
            type="email" 
            name="email" 
            value={formik.values.email} 
            onChange={formik.handleChange} 
            required 
        />
    </label>
    {formik.touched.email && formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
    <label>
        Password:
        <input 
            type="password" 
            name="password" 
            value={formik.values.password} 
            onChange={formik.handleChange} 
            required 
        />
    </label>
    {formik.touched.password && formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}
    <button type="submit">Sign Up</button>
    <p>Already have an account? <Link to="/login">Login here</Link></p>
</form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
