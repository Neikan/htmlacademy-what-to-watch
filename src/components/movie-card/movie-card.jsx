import React from "react";
import PropTypes from "prop-types";


const Url = {
  IMG: `img`
};

const FileExtension = {
  JPG: `jpg`
};


const MovieCard = (props) => {
  const {id, title, cover, onMovieSelect, onMovieMouseOver, onMovieMouseOut} = props;

  const coverUrl = `/${Url.IMG}/${cover}.${FileExtension.JPG}`;

  return (
    <article
      onMouseOver={onMovieMouseOver}
      onMouseOut={onMovieMouseOut}
      id={id}
      className="small-movie-card catalog__movies-card"
    >
      <div
        onClick={onMovieSelect}
        className="small-movie-card__image"
      >
        <img src={coverUrl} alt={title} width="280" height="175" />
      </div>
      <h3
        onClick={onMovieSelect}
        className="small-movie-card__title"
      >
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};


MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  onMovieMouseOver: PropTypes.func.isRequired,
  onMovieMouseOut: PropTypes.func.isRequired
};


export default MovieCard;
