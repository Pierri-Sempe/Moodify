import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Menu');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Moodify</h2>
      <input type="text" placeholder="Email or Username" className="input-field" />
      <input type="password" placeholder="Password" className="input-field" />
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}
