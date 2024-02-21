import { Link, useNavigate } from "react-router-dom"; // Assuming you use React Router
import "../style/HomePage.css";
import { successEvent } from "../helpers/alerts";
import socket from "../socket";
import PostCard from "../components/PostCard";
import Navbar from "../components/Navbar";

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
          <Navbar />
        </header>

        <main className="main-content">
          <PostCard
            post={{ photo: "/add-image.png", description: "makan bang" }}
          />
        </main>

        <footer className="footer">{/* Add the footer content here */}</footer>
      </div>
    </>
  );
}
