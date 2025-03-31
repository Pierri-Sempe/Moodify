import './Home.css';
import React from 'react'


export default function Home() {
  return (
    <div className="home-container">
      <nav className="nav-bar" >
        <a href="/signup" className="nav-link">Sign in</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/login" className="nav-link">Login</a>
      </nav>
      <main className="main-content">
        <h1 className="title">Moodify</h1>
        <p className="subtitle">Discover the perfect melody for every emotion and let the music speak for you</p>
        <button className="btn">Get started</button>
      </main>
    </div>
  );
}