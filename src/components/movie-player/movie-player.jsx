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
    isPlaying,
    movie,
    onChangePlaying,
    onClose,
    onSetFullScreen,
    time
  } = props;

  const {id, title} = movie;

  return (
    <div className="player">
      {children}

      <BtnExit
        id={id}
        onClose={onClose}
      />

      <div className="player__controls">
        <div className="player__controls-row">
          <ScaleTime time={time} />
        </div>

        <div className="player__controls-row">
          <BtnsPlaying
            isPlaying={isPlaying}
            onChangePlaying={onChangePlaying}
          />

          <div className="player__name">{title}</div>

          <BtnFullScreen onSet={onSetFullScreen} />
        </div>
      </div>
    </div>
  );
};


MoviePlayer.propTypes = {
  children: PropTypes.element.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  movie: movieType.isRequired,
  onChangePlaying: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSetFullScreen: PropTypes.func.isRequired,
  time: timeType.isRequired
};


export default MoviePlayer;
