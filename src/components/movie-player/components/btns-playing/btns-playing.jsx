// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import BtnPause from "../btn-pause/btn-pause.jsx";
import BtnPlay from "../btn-play/btn-play.jsx";


/**
 * Создание компонента, обеспечивающего переход проигрывателя
 * между режимами удержания и воспроизведения
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const BtnsPlaying = (props) => {
  const {isPlaying, onPlayingChange} = props;

  return (
    <button type="button" className="player__play"
      onClick={() => onPlayingChange()}
    >
      {isPlaying ? <BtnPause /> : <BtnPlay />}
    </button>
  );
};


BtnsPlaying.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayingChange: PropTypes.func.isRequired
};


export default BtnsPlaying;
