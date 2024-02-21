import { Link, useNavigate } from "react-router-dom"; // Assuming you use React Router
import "../style/HomePage.css";
import { successEvent } from "../helpers/alerts";
import socket from "../socket";

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    successEvent("You are logout now");
    navigate("/login");
  };

  return (
    <>
      <div className="home-page">
        <header className="header">
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
            <button className="nav-icon log-out" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </header>

        <main className="main-content">{/* Add the main content here */}</main>

        <footer className="footer">{/* Add the footer content here */}</footer>
      </div>
    </>
  );
}
