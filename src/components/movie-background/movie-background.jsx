// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";

// Импорт типов, констант, утилит
import {getImgSrc} from "../../utils/common.js";


/**
 * Создание компонента, обеспечивающего отображение фона страниц
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MovieBackground = (props) => {
  const {poster, title} = props;

  return (
    <div className="movie-card__bg">
      <img src={getImgSrc(poster)} alt={title} />
    </div>
  );
};


MovieBackground.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};


export default MovieBackground;
