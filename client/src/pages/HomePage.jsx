import { Link, useNavigate } from "react-router-dom"; // Assuming you use React Router
import "../style/HomePage.css";
import { successEvent } from "../helpers/alerts";
import socket from "../socket";
import PostCard from "../components/PostCard";
<<<<<<< HEAD
import Navbar from "../components/Navbar";
=======
>>>>>>> 271a8f6ad7d162d13a60de9b718047397e1b00ba

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
<<<<<<< HEAD
          <PostCard
            post={{ photo: "/add-image.png", description: "makan bang" }}
          />
=======
          <PostCard/>
>>>>>>> 271a8f6ad7d162d13a60de9b718047397e1b00ba
        </main>

        <footer className="footer">{/* Add the footer content here */}</footer>
      </div>
    </>
  );
}
