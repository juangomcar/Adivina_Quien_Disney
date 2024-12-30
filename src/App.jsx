import React, { useState } from 'react';
import MovieGenerator from './components/MovieGenerator';
import MovieList from './components/MovieList';
import './App.css';

const initialMovies = [
  'El Rey León', 'Frozen', 'Toy Story', 'Up', 'Coco', 'Moana', 'Mulán',
  'Zootopia', 'Tarzán', 'Enredados', 'La Bella y la Bestia', 'Aladdín',
  'Valiente', 'Ratatouille', 'Buscando a Nemo', 'Cars', 'Hércules',
  'Los Increíbles', 'WALL-E', 'Soul', 'Big Hero 6', 'Pocahontas',
  'Blancanieves', 'Cenicienta', 'Bambi', 'Peter Pan', 'Dumbo',
  'La Sirenita', 'Tarzán', 'Zootopia', 'Big Hero 6', 'Ralph el Demoledor',
  'Valiente', 'El Libro de la Selva', 'Los Increíbles', 'Up', 'Buscando a Nemo',
  'Cars', 'Ratatouille', 'WALL-E', 'Soul', 'Coco', 'Luca',  
  'Alicia en el País de las Maravillas', 'Bolt','La Dama y el Vagabundo',
  'Robin Hood', 'El Planeta del Tesoro','Winnie the Pooh', 'Pinocho','Chicken Little',
  'La bella durmiente', 'El Jorobado de Notre Dame','Tierra de Osos', 'Encanto', 'La princesa y el sapo',  
].map(name => ({ name, disabled: false }));

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [selectedMovie, setSelectedMovie] = useState('');

  const resetMovies = () => {
    setMovies(initialMovies.map(movie => ({ ...movie, disabled: false })));
    generateRandomMovie();
  };

  const toggleMovie = (index) => {
    setMovies(prev =>
      prev.map((movie, i) =>
        i === index ? { ...movie, disabled: !movie.disabled } : movie
      )
    );
  };

  const generateRandomMovie = () => {
    const activeMovies = movies.filter(movie => !movie.disabled);
    if (activeMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * activeMovies.length);
      setSelectedMovie(activeMovies[randomIndex].name);
    } else {
      setSelectedMovie('¡No quedan películas disponibles!');
    }
  };

  return (
    <div className="App">
      <MovieGenerator onGenerate={resetMovies} selectedMovie={selectedMovie} />
      <h2>🎬 Lista de Películas</h2>
      <MovieList movies={movies} onToggleMovie={toggleMovie} />
    </div>
  );
}

export default App;
