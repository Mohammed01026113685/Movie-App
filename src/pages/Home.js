import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieSlider from '../components/MovieSlider';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get('https://api.tvmaze.com/shows');
        setMovies(data.slice(0, 10)); // عرض أول 10 أفلام فقط
      } catch (error) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center mt-5">{error}</div>;
  }

  return (
    <div className="home-container">
      <MovieSlider movies={movies} />
      <div className="latest-movies-section">
        <h3>Latest Movies</h3>
        <div className="movies-list">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="movie-item">
                <img src={movie.image?.medium} alt={movie.name} />
                <h5>{movie.name}</h5>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <div>No movies available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
