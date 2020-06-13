import React from "react";
import PropTypes from "prop-types";


const PosterSettrings = {
  TAG: `img/`,
  EXTENSION: `.jpg`
};

const MovieCard = (props) => {
  const {movieTitle, moviePoster} = props;

  const poster = PosterSettrings.TAG + moviePoster + PosterSettrings.EXTENSION;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={poster} alt={movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movieTitle}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  moviePoster: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired
};


export default MovieCard;
