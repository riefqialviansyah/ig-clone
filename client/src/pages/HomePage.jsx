import React from 'react';
import '../style/HomePage.css';

export default function HomePage() {
  return (
    <>
      <div className="home-page">
        <header className="header">
          <div className="logo">Instagram</div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav-icons">
            {/* Tambahkan ikon-ikon navigasi di sini */}
          </div>
        </header> p0-[]

        <main className="main-content">
          {/* Tambahkan konten beranda di sini */}
        </main>

        <footer className="footer">
          {/* Tambahkan bagian footer di sini */}
        </footer>
      </div>
    </>
  );
}
