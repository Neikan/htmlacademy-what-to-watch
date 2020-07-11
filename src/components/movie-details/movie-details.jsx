import React from "react";
import {movieType} from "../../props/prop-types.js";


const MovieDetails = (props) => {
  const {movie} = props;
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
};


MovieDetails.propTypes = {
  movie: movieType.isRequired
};


export default MovieDetails;
