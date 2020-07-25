// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";


/**
 * Создание компонента, обеспечивающего перевод проигрывателя в полноэкранный режим
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const BtnFullScreen = (props) => {
  return (
    <button type="button" className="player__full-screen"
      onClick={() => props.onSelect()}
    >
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
};


BtnFullScreen.propTypes = {
  onSelect: PropTypes.func.isRequired
};


export default BtnFullScreen;
