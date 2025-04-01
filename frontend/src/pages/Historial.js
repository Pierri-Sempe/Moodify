import React from 'react';
import './Historial.css';

export default function Historial() {
  return (
    <div className="container">
      <aside className="sidebar">
        <h2 className="logo">Moodify</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Recomendación</a>
          <a href="#">Historial</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Historial</h1>
          <button className="logout-btn">Logout</button>
        </header>

        <section className="history-section">
          <div className="search-bar">
            <input type="text" placeholder="Buscar..." className="search-input" />
          </div>

          <div className="history-table">
            <div className="history-header">
              <span>Nombre</span>
              <span>Artista</span>
              <span>Género</span>
              <span>Fecha</span>
              <span>Emoción</span>
            </div>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="history-item">
                <div className="song-image"></div>
                <span>Canción {index + 1}</span>
                <span>Artista {index + 1}</span>
                <span>Género {index + 1}</span>
                <span>Fecha {index + 1}</span>
                <span>Emoción {index + 1}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
