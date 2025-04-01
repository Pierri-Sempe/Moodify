import React from 'react';
import './Recomendaciones.css';

export default function Recomendaciones() {
  return (
    <div className="container">
      <aside className="sidebar">
        <h2 className="logo">Moodify</h2>
        <nav>
        <ul>
            <li><a href="/Menu">Home</a></li>
            <li><a href="/recomendaciones">Recomendación</a></li>
            <li><a href="/historial">Historial</a></li>
        </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Recomendaciones Generales</h1>
          <button className="logout-btn">Logout</button>
        </header>

        <section className="emotion-selection">
          <div className="emotion-buttons">
            <button className="emotion-btn">Alegría</button>
            <button className="emotion-btn">Amor</button>
            <button className="emotion-btn">Calma</button>
            <button className="emotion-btn">Tristeza</button>
            <button className="emotion-btn">Enojo</button>
            <button className="emotion-btn">Miedo</button>
          </div>
          <button className="recommend-btn">Obtener recomendación</button>
        </section>

        <section className="song-list">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="song-item">
              <div className="song-image"></div>
              <div className="song-info">
                <p>Canción {index + 1}</p>
                <span>Artista, género</span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
