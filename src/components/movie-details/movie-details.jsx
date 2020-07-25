// Импорт библиотек
import React from "react";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types.js";


/**
 * Создание компонента, обеспечивающего отображение вкладки дополнительной информации о фильме
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MovieDetails = (props) => {
  const {movie} = props;
  if (movie) {
    const {description, director, actors, rating} = movie;
    const {score, level, countVotes} = rating;

    return (
      <>
        <div className="movie-rating">
          <div className="movie-rating__score">{score}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{level}</span>
            <span className="movie-rating__count">{countVotes} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>{description}</p>

          <p className="movie-card__director"><strong>Director: {director}</strong></p>

          <p className="movie-card__starring"><strong>Starring: {actors} and other</strong></p>
        </div>
      </>
    );
  }

  return null;
};


MovieDetails.propTypes = {
  movie: movieType.isRequired
};


export default MovieDetails;
