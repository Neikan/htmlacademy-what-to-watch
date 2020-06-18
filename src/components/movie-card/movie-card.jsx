import React from "react";
import PropTypes from "prop-types";


const Url = {
  IMG: `img`
};

const FileExtension = {
  JPG: `jpg`
};

const MovieCard = (props) => {
  const {title, poster, onMovieDetailsOpen} = props;

  const posterUrl = `/${Url.IMG}/${poster}.${FileExtension.JPG}`;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div
        onClick={onMovieDetailsOpen}
        className="small-movie-card__image"
      >
        <img src={posterUrl} alt={title} width="280" height="175" />
      </div>
      <h3
        onClick={onMovieDetailsOpen}
        className="small-movie-card__title"
      >
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onMovieDetailsOpen: PropTypes.func.isRequired
};


export default MovieCard;
