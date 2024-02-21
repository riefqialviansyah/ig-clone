// LayoutPage.jsx

import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import '../style/LayoutPage.css';

export default function LayoutPage() {
  return (
    <div className="layout-page">
      {/* <Navbar /> */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
