// Импорт библиотек
import React, {PureComponent} from "react";
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
 */
class MoviePlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSetFullScreen = this._handleSetFullScreen.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {
      children,
      movie,
      time,
      isPlaying,
      onClose,
      onPlayingChange
    } = this.props;

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
              onPlayingChange={onPlayingChange}
            />
            <div className="player__name">{title}</div>
            <BtnFullScreen
              onSelect={this._handleSetFullScreen}
            />
          </div>
        </div>
      </div>
    );
  }


  /**
   * Метод, обеспечивабщий перевод проигрывателя в полноэкранный режим
   */
  _handleSetFullScreen() {
    this.props.onSetFullScreen();
  }
}


MoviePlayer.propTypes = {
  children: PropTypes.element.isRequired,
  movie: movieType.isRequired,
  time: timeType.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onPlayingChange: PropTypes.func.isRequired,
  onSetFullScreen: PropTypes.func.isRequired
};


export default MoviePlayer;
