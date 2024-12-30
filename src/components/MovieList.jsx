import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, onToggleMovie }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div
          key={index}
          className={`movie-item ${movie.disabled ? 'disabled' : ''}`}
          onClick={() => onToggleMovie(index)}
        >
          {movie.name}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
