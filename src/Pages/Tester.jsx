import React, { useContext, useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import dataHandling from "../UserContext/UserContext";

function Registration() {
  const navigate = useNavigate();

  const initialFormData = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { userData, setUserData } = useContext(dataHandling);

  // Initialize userData as an empty array if it's undefined
  if (!userData) {
    setUserData([]);
  }

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const userHandler = () => {
    userData.push({
      name: formData.name,
      username: formData.username,
      password: formData.password,
      email: formData.email,
    });
    setUserData(userData.slice());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.name === "") {
      newErrors.name = "Name is required";
    }
    if (formData.username === "") {
      newErrors.username = "User Name is required";
    }
    if (formData.email === "") {
      newErrors.email = "Email is required";
    }
    if (formData.password === "") {
      newErrors.password = "Password is required";
    }
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
      userHandler();
      navigate("/login");

      console.log(userData);
    }
  };

  return (
    <>
      {/* Section: Design Block */}
      <section className="background-radial-gradient overflow-hidden">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          }}
        />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight">
                The best offer <br />
                <span>for your business</span>
              </h1>
              <p className="mb-4 opacity-70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
              <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div style={{ textAlign: "center", color: "rgb(117, 14, 176)" }}>
                      <Link to={"/"} style={{ textDecoration: "none", color: "rgb(117, 14, 176)" }}>
                        <h1>REGISTER</h1>
                      </Link>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                      />
                      <div style={{ color: "red" }}>{errors.name}</div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                      <div style={{ color: "red" }}>{errors.email}</div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="User Name"
                      />
                      <div style={{ color: "red" }}>{errors.username}</div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                      <div style={{ color: "red" }}>{errors.password}</div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                      />
                      <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                    </div>
                    <button style={{ width: "100%" }} type="submit" className="btn btn-primary btn-block mb-4">
                      Register
                    </button>
                    <div className="text-center">
                      <p>
                        Already have an account?
                        <Link to="/login"> Login</Link>
                      </p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>
  );
}

export default Registration;
