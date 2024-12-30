import React from 'react';
import './MovieGenerator.css';

const MovieGenerator = ({ onGenerate, selectedMovie }) => {
  return (
    <div className="movie-generator">
      <h1>🎥 ¡Adivina la Película Disney! 🎬</h1>
      <button onClick={onGenerate}>🎲 Generar Película</button>
      {selectedMovie && <p className="movie-name">{selectedMovie}</p>}
    </div>
  );
};

export default MovieGenerator;
