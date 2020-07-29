// Импорт библиотек
import React from "react";

// Импорт типов, констант, утилит
import {reviewType} from "../../props/prop-types.js";


/**
 * Создание компонента, обеспечивающего отображение комментария о фильме
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MovieReview = (props) => {
  const {review} = props;
  const {text, author, date, rating} = review;
  const {name} = author;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={date}>{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};


MovieReview.propTypes = {
  review: reviewType.isRequired
};


export default MovieReview;
