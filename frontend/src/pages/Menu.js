import React from 'react';
import './Menu.css';

export default function Menu() {
  return (

    <div className="menu-container">
      
      <aside className="sidebar">
      <h2>Moodify</h2>
        <nav>
          <ul>
            <li><a href="/Menu">Home</a></li>
            <li><a href="/recomendaciones">Recomendación</a></li>
            <li><a href="/historial">Historial</a></li>
          </ul>
        </nav>
      </aside>
      
      <div className="main-content">   
        <section className="sync-section">
          <h1>Sincronízate con tus emociones</h1>
          <p>Selecciona una foto o imagen</p>
          <button className="upload-btn">📤</button>
          <div className="image-placeholder"></div>
          <button className="search-button" a href="/busqueda">Realizar búsqueda</button>
        </section>
      </div>
      <div>
        <section className="dashboard">
          <h2>Dashboard personal</h2>
          <p>Tus emociones de la semana</p>
          <div className="dashboard-box"></div>
          <p>Número de análisis realizados: <span>#</span></p>
          <p>Emociones positivas vs negativas</p>
          <div className="dashboard-box"></div>
          </section>
      </div>
    </div>
  );
}
