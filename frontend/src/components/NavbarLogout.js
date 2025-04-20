// src/components/NavbarLogout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarLogout.css';

export default function NavbarLogout() {
  return (
    <header className="navbar-logout">
      <div className="navbar-left">Moodify</div>
      <nav className="navbar-right">
        <Link to="/logout" className="logout-link">Logout</Link>
      </nav>
    </header>
  );
}
