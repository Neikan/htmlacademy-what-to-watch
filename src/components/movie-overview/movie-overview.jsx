// Импорт библиотек
import React from "react";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types.js";


/**
 * Создание компонента, обеспечивающего отображение вкладки детальной информации о фильме
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MovieOverView = (props) => {
  const {movie} = props;

  if (movie) {
    const {actors, director, duration, genre, year} = movie;

    return (
      <>
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                {actors}
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{duration}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{year}</span>
            </p>
          </div>
        </div>
      </>
    );
  }

  return null;
};


MovieOverView.propTypes = {
  movie: movieType.isRequired
};


export default MovieOverView;
