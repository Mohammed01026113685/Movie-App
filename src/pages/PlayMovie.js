import React from "react";
import { useParams } from "react-router-dom";

const PlayMovie = () => {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h2>Play Movie</h2>
      <p>Here you can play the movie with ID: {id}</p>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0`}
          allowFullScreen
          title="Movie Player"
        ></iframe>
      </div>
    </div>
  );
};

export default PlayMovie;
