// RegisterPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import '../style/RegisterPage.css';

export default function RegisterPage() {
  return (
    <div className="signup">
      <img
        src="/instagram.jpg"
        alt="Instagram Logo"
      />
      <form>
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <Link to="/">
          <button>Sign Up</button>
        </Link>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
