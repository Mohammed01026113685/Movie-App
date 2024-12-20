import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setMovie(data);
      } catch (error) {
        setError("Failed to fetch movie details");
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center mt-5">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img
            src={movie.image?.original}
            alt={movie.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="mb-3">{movie.name}</h2>
          <p className="text-muted"><strong>Genres:</strong> {movie.genres.join(", ")}</p>
          <p className="text-muted"><strong>Premiered:</strong> {movie.premiered}</p>
          <div className="summary mt-3">
            <h4>Summary</h4>
            <p>{movie.summary}</p>
          </div>
          <div className="mt-4">
            <a
              href={movie.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Official Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
