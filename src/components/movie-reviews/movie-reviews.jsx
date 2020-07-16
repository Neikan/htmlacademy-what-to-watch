import React from "react";
import {movieType} from "../../props/prop-types.js";
import MovieReview from "../movie-review/movie-review.jsx";
import {getIntervalForCols} from "../../utils/common.js";


const renderReview = (review) => {
  return (
    <MovieReview
      key={review.id}
      review={review}
    />
  );
};


const renderCol = (interval, reviews) => {
  const {begin, end} = interval;

  return (
    <div className="movie-card__reviews-col" key={begin + end}>
      {reviews.slice(begin, end).map(renderReview)}
    </div>
  );
};


const renderReviews = (intervals, reviews) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      {intervals.map((interval) => renderCol(interval, reviews))}
    </div>
  );
};


const MovieReviews = (props) => {
  const {movie} = props;
  const {reviews} = movie;

  const intervals = getIntervalForCols(reviews);

  return intervals ? renderReviews(intervals, reviews) : null;
};


MovieReviews.propTypes = {
  movie: movieType.isRequired
};


export default MovieReviews;
