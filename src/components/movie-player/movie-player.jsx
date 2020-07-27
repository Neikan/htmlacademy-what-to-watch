// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import BtnExit from "./components/btn-exit/btn-exit.jsx";
import BtnFullScreen from "./components/btn-full-screen/btn-full-screen.jsx";
import BtnsPlaying from "./components/btns-playing/btns-playing.jsx";
import ScaleTime from "./components/scale-time/scale-time.jsx";

// Импорт типов, констант, утилит
import {movieType, timeType} from "../../props/prop-types.js";


/**
 * Создание компонента, обеспечивающего отображение проигрывателя фильма
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MoviePlayer = (props) => {
  const {
    children,
    movie,
    time,
    isPlaying,
    onClose,
    onChangePlaying,
    onSetFullScreen
  } = props;

  const {title} = movie;

  return (
    <div className="player">
      {children}

      <BtnExit
        onClose={onClose}
      />

      <div className="player__controls">
        <div className="player__controls-row">
          <ScaleTime
            time={time}
          />
        </div>

        <div className="player__controls-row">
          <BtnsPlaying
            isPlaying={isPlaying}
            onChangePlaying={onChangePlaying}
          />
          <div className="player__name">{title}</div>
          <BtnFullScreen
            onSet={onSetFullScreen}
          />
        </div>
      </div>
    </div>
  );
};


MoviePlayer.propTypes = {
  children: PropTypes.element.isRequired,
  movie: movieType.isRequired,
  time: timeType.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onChangePlaying: PropTypes.func.isRequired,
  onSetFullScreen: PropTypes.func.isRequired
};


export default MoviePlayer;
