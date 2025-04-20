// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <Link to="/signup" className="nav-link">Sign up</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </nav>
  );
}
