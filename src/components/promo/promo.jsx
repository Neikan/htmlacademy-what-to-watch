import React from "react";
import PropTypes from "prop-types";
import {promoType} from "../../props/prop-types";


const Promo = (props) => {
  const {promo, onPlay, onAdd} = props;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt={promo.TITLE} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{promo.TITLE}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{promo.GENRE}</span>
            <span className="movie-card__year">{promo.DATE}</span>
          </p>

          <div className="movie-card__buttons">
            <button
              onClick = {onPlay}
              className="btn btn--play movie-card__button" type="button"
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button
              onClick = {onAdd}
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
  promo: promoType.isRequired,
  onPlay: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};


export default Promo;
