import { Link, useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import { successEvent } from "../helpers/alerts";

// import socket.io
import socket from "../socket";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    successEvent("You are logout now");
    navigate("/login");
    socket.disconnect();
  };

  return (
    <>
      <img src="/instagram.png" alt="Instagram Logo" className="logo" />
      <div className="nav-icons">
        {/* "Create Post" button */}
        <Link to="/create-post" className="nav-icon">
          <img
            src="/create-post.png"
            alt="Create Post"
            className="create-post-icon"
          />
        </Link>

        <button
          onClick={handleLogout}
          className="nav-icon log-out"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Log Out
        </button>
      </div>
    </>
  );
}
