import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import "./Signup.css";
import Navbar from "./Navbar";

const Signup = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://moringa-box-4kry.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Fetch successful:", data);

          Swal.fire({
            title: "Success!",
            text: "Account created successfully!",
            icon: "success",
            confirmButtonText: "Continue",
            confirmButtonColor: "#ba324f",
          });

          navigate("/login");
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    },
  });

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center w-full mx-auto p-10">
        <form onSubmit={formik.handleSubmit} className="text-white max-w-[400px] rounded-xl w-full mx-auto bg-[#1e232a] p-8">
          <h2 className="text-2xl font-medium text-center py-4">Create an M-<span className="text-red-600">BOX</span> Account</h2>
          <div className="flex flex-col mb-4">
            <label>
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 text-black bg-gray-200"
            />

            {formik.touched.firstname && formik.errors.firstname ? (
              <div style={{ color: "red" }}>{formik.errors.firstname}</div>
            ) : null}
          </div>
          <div className="flex flex-col mb-4">
            <label>
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 text-black bg-gray-200"
            />

            {formik.touched.lastname && formik.errors.lastname ? (
              <div style={{ color: "red" }}>{formik.errors.lastname}</div>
            ) : null}
          </div>
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
              onBlur={formik.handleBlur}
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
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="w-full rounded-2xl py-2 mt-6 bg-[#ba324f] hover:bg-[#9eb3c2]">SIGN UP</button>
          <p className="text-center mt-8">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
