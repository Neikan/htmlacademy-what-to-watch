import React from "react";
import PropTypes from "prop-types";
import {movieType} from "../../props/prop-types";
import {getImgSrc} from "../../utils/common";


const Promo = (props) => {
  const {movie, onPlay, onAdd} = props;
  const {title, poster, genre, year} = movie;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={getImgSrc(poster)} alt={title} width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{year}</span>
          </p>

          <div className="movie-card__buttons">
            <button
              onClick={onPlay}
              className="btn btn--play movie-card__button" type="button"
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button
              onClick={onAdd}
              className="btn btn--list movie-card__button" type="button"
            >
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


Promo.propTypes = {
  movie: movieType.isRequired,
  onPlay: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};


export default Promo;
