// LayoutPage.jsx

import { Outlet } from "react-router-dom";
import "../style/LayoutPage.css";

export default function LayoutPage() {
  return (
    <div className="layout-page">
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
