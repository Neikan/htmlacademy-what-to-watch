import React from "react";
import PropTypes from "prop-types";
import {reviewType} from "../../props/prop-types.js";
import MovieTabs from "../movie-tabs/movie-tabs.jsx";
import MovieReview from "../movie-review/movie-review.jsx";


const MovieReviews = (props) => {
  const {reviews} = props;

  const countArray = [
    {
      begin: 0,
      end: reviews.length / 2
    }, {
      begin: reviews.length / 2 + 1,
      end: reviews.length
    }
  ];

  return (
    <div className="movie-card__desc">
      <MovieTabs />

      <div className="movie-card__reviews movie-card__row">
        {countArray.map(({begin, end}) => {
          return (
            <div className="movie-card__reviews-col" key={begin + end}>
              {reviews.slice(begin, end).map((review) => {
                return (
                  <MovieReview
                    key = {review.id}
                    review = {review}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};


MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewType).isRequired
};


export default MovieReviews;
