// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import MovieReview from "../movie-review/movie-review.jsx";

// Импорт типов, констант, утилит
import {reviewType} from "../../props/prop-types.js";
import {getIntervalForCols} from "../../utils/common.js";


/**
 * Создание компонента, обеспечивающего отображение вкладки с отзывами о фильме
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MovieReviews = (props) => {
  const {reviews} = props;

  const intervals = getIntervalForCols(reviews);

  return intervals ? renderReviews(intervals, reviews) : null;
};


const renderReviews = (intervals, reviews) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      {intervals.map((interval) => renderCol(interval, reviews))}
    </div>
  );
};


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


MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewType).isRequired,
};


export default MovieReviews;
