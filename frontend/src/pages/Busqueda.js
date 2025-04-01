import React, { useState } from 'react';
import './Busqueda.css';

export default function Busqueda() {
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [songs, setSongs] = useState([]);

    const emotions = ["Alegría", "Amor", "Calma", "Tristeza", "Enojo", "Miedo"];

    const handleEmotionClick = (emotion) => {
        setSelectedEmotion(emotion);
    };

    const handleRecommendClick = () => {
        const recommendedSongs = [
            { title: "Canción 1", artist: "Artista 1", genre: "Género 1" },
            { title: "Canción 2", artist: "Artista 2", genre: "Género 2" },
            { title: "Canción 3", artist: "Artista 3", genre: "Género 3" },
            { title: "Canción 4", artist: "Artista 4", genre: "Género 4" },
            { title: "Canción 5", artist: "Artista 5", genre: "Género 5" }
        ];
        setSongs(recommendedSongs);
    };

    return (
        <div className="busqueda-container">
            <div className="sidebar">
                <h2>Moodify</h2>
                <nav>
                    <ul>
                        <li><a href="/Menu">Home</a></li>
                        <li><a href="/recomendaciones">Recomendación</a></li>
                        <li><a href="/historial">Historial</a></li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <h2>Según tus emociones...</h2>
                <div className="emotion-buttons">
                    {emotions.map((emotion) => (
                        <button 
                            key={emotion} 
                            className={`emotion-btn ${selectedEmotion === emotion ? 'selected' : ''}`} 
                            onClick={() => handleEmotionClick(emotion)}
                        >
                            {emotion}
                        </button>
                    ))}
                </div>
                <button id="recommend-btn" onClick={handleRecommendClick}>
                    Obtener nuevas recomendaciones
                </button>
                <div className="recommendations-list">
                    {songs.map((song, index) => (
                        <div key={index} className="song-item">
                            <div className="song-image"></div>
                            <div className="song-info">
                                <p className="song-title">{song.title}</p>
                                <p className="song-artist">{song.artist}, {song.genre}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}