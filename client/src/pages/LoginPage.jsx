// LoginPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import '../style/LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login">
      <div className="login-img-container">
        <img
          src="/instagram.jpg"
          alt="Instagram Logo"
          className="login-img"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
      />
      <Link to="/">
        <button className="login-button">Login</button>
      </Link>

      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}