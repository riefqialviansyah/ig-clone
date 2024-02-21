// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import '../style/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Instagram</Link>
      </div>
      <div className="nav-icons">
        <Link to="/explore">
          <i className="fas fa-search"></i>
        </Link>
        <Link to="/notifications">
          <i className="far fa-heart"></i>
        </Link>
        <Link to="/profile">
          <i className="far fa-user"></i>
        </Link>
      </div>
    </div>
  );
}
