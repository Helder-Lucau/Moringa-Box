import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SweetAlert2 from "sweetalert2";
import * as yup from "yup";
import { useFormik } from "formik";
import Spinner from "./Spinner"; // Assuming Spinner component is in the same directory
import "./Login.css";
import Navbar from "./Navbar";


function Login({setUser}) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        let resp = await fetch("https://moringa-box-4kry.onrender.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formik.values, null, 2),
        });

        if (resp.ok) {
          let re = await resp.json();
          console.log('rrrrrrrrrrrrrrrrrrrrrrrrrr')
          console.log(re);
          console.log("Received access token: " + re['access_token']);
          console.log("Received user: " + re['user']);

          localStorage.setItem("accessToken", re['access_token']);
          localStorage.setItem("user", re['user']);

          setUser(re['user']);
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            SweetAlert2.fire({
              title: "Success!",
              text: "Welcome to M-BOX",
              icon: "success",
              confirmButtonText: "Continue",
              confirmButtonColor: "#ba324f",
            });
            navigate("/Dashboard");
          }, 2000);

        } else {
          let errorData = await resp.json();
          if (resp.status === 500 || resp.status === 401) {
            setErrors({ password: "Invalid username or password." });
          } else {
            setErrors({ password: errorData.message });
          }
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    },
  });

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen w-full">
        <form onSubmit={formik.handleSubmit} className="text-white max-w-[400px] rounded-xl w-full mx-auto bg-[#1e232a] p-8">
          <h2 className="text-2xl font-medium text-center py-4">Login to your Account</h2>
          <div className="flex flex-col mb-4">
            <label>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="p-2 text-black bg-gray-200"
              placeholder="mbox@google.com"
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col mb-4">
            <label>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="p-2 text-black bg-gray-200"
              placeholder="Password"
              required
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
          {isLoading ? <Spinner /> : <button type="submit" className="w-full rounded-2xl py-2 mt-6 bg-[#ba324f] hover:bg-[#9eb3c2]">LOGIN</button>}
          <p className="text-center mt-8">
            Don't have an account? <Link to="/Signup" className="no-underline">Sign up now</Link>
          </p>
        </form>
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}
      </div>
    </div>
  );
}

export default Login
