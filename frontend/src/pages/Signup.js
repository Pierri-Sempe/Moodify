import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/Menu');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Moodify</h2>
      <input type="text" placeholder="Email" className="input-field" />
      <input type="text" placeholder="Username" className="input-field" />
      <input type="password" placeholder="Password" className="input-field" />
      <button className="signup-button" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
