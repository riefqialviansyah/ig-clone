import { Link } from "react-router-dom"; // Assuming you use React Router
import "../style/HomePage.css";

export default function HomePage() {
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

            <button className="nav-icon log-out">
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            Log Out
        </Link>
</button>

          </div>
        </header>

        <main className="main-content">{/* Add the main content here */}</main>

        <footer className="footer">{/* Add the footer content here */}</footer>
      </div>
    </>
  );
}
