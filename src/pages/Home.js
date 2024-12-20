// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieSlider from '../components/MovieSlider';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get('http://api.tvmaze.com/shows');
      setMovies(data.slice(0, 10));
    };

    fetchMovies();
  }, []);

  return (
    <div className="home-container">
      <MovieSlider movies={movies} />
      <div className="latest-movies-section">
        <h3>Latest Movie List </h3>
        <div className="movies-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img src={movie.image?.medium} alt={movie.name} />
              <h5>{movie.name}</h5>
              <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
