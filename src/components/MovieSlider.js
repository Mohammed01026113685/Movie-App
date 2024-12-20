// src/components/MovieSlider.js
import React from 'react';
import Slider from 'react-slick';
import './MovieSlider.css';


const MovieSlider = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="movie-slider">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-slide">
            <img
              src={movie.image?.medium}
              alt={movie.name}
              className="movie-image"
            />
            <h5 className="movie-title">{movie.name}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
