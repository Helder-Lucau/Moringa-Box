import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SweetAlert2 from "sweetalert2";
import * as yup from "yup";
import { useFormik } from "formik";
import "./Login.css";

function Login() {
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
        console.log("Form Submitted:", values);
        console.log("Fetching data...................................");
            
            console.log("Fetching formik data...................................");
            console.log(formik.values);
      try {
        let resp = await fetch("http://127.0.0.1:5555/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formik.values, null, 2),
        });

        if (resp.ok) {
          let re = await resp.json();
          console.log("Received access token..............: " + re.access_token);
          console.log("Received user.................: " + re.user);

          localStorage.setItem("accessToken", re.access_token);
          localStorage.setItem("user_id", re.user_id);

          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            SweetAlert2.fire({
              title: "Success!",
              text: "Log In is successful, Welcome to Moringa-Box",
              icon: "success",
              confirmButtonText: "Nice",
              confirmButtonColor: "#f1cc17",
            });
            navigate("/");
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
    <>
      <div className="popup">
        <div className="popup-content">
          <div className="login-popup">
            <div className="login-popup-content">
              <h2>M-<span>Box</span></h2>
              <h5>Login To Your Account</h5>
              <form onSubmit={formik.handleSubmit}>
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
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}
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
                {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
                {isLoading ? <Spinner /> : <button type="submit">Login</button>}
              </form>
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
              <p>
                Don't have an account? <Link to="/Signup">Sign up here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
