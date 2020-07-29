// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";


/**
 * Создание компонента, обеспечивающего отображение фона страниц
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MovieBackground = (props) => {
  const {backgroundImage, title} = props;

  return (
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={title} />
    </div>
  );
};


MovieBackground.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};


export default MovieBackground;
