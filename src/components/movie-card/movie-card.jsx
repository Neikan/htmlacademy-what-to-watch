import React from "react";
import PropTypes from "prop-types";
import {movieType} from "../../props/prop-types";
import {getImgSrc} from "../../utils/common";


const MovieCard = (props) => {
  const {movie, onMovieSelect, onMovieMouseOver, onMovieMouseOut} = props;
  const {id, title, cover} = movie;

  return (
    <article
      onMouseOver={onMovieMouseOver}
      onMouseOut={onMovieMouseOut}
      id={id}
      className="small-movie-card catalog__movies-card"
    >
      <div
        onClick={() => onMovieSelect(movie)}
        className="small-movie-card__image"
      >
        <img src={getImgSrc(cover)} alt={title} width="280" height="175" />
      </div>
      <h3
        onClick={() => onMovieSelect(movie)}
        className="small-movie-card__title"
      >
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};


MovieCard.propTypes = {
  movie: movieType.isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  onMovieMouseOver: PropTypes.func.isRequired,
  onMovieMouseOut: PropTypes.func.isRequired
};


export default MovieCard;
