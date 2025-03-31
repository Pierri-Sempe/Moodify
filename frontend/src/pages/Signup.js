import React from 'react';
import './Signup.css';

export default function Signup() {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Moodify</h2>
      <input type="text" placeholder="Email" className="input-field" />
      <input type="text" placeholder="Username" className="input-field" />
      <input type="password" placeholder="Password" className="input-field" />
      <button className="signup-button">Sign Up</button>
    </div>
  );
}
