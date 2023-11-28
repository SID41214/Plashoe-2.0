import React, { useState } from "react";
import "./AdminLogin.css";
import { Outlet, useNavigate } from "react-router-dom";
import AdminData from "./AdminData";
import image from './Images/pexels-photo-1895019.webp'

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const admin = AdminData;

  const handleLogin = () => {
    console.log(username);
    console.log(password);
    console.log(admin.userName);
    console.log(admin.password);

    if (username === admin.userName && password === admin.password) {
        navigate('adminPage')
    } else {
      alert("Enter the correct username and password");
    }
  };

  return (
    <div className="main">
    <div className="admin-login-container">
      <div className="admin-login-image">
        <img src={image} alt="Admin Login" />
      </div>
      <div className="admin-login-form">
        <h1>Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    <Outlet/>
    </div>
  );
}

export default AdminLogin;
