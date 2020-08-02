// Импорт библиотек
import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

// Импорт типов, констант, утилит
import {Timeout} from "../../consts/common-data";


/**
 * Создание компонента, обеспечивающего отображение проигрывателя для трейлера фильма
 */
class MoviePlayerPreview extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timeout = null;
  }


  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {cover} = this.props;

    return (
      <video width="280" height="175"
        poster={cover}
        ref={this._videoRef}
        type="video/webm"
      >
        Sorry, your browser doesn`t support embedded videos
      </video>
    );
  }


  /**
   * Метод, обеспечивающий установку для компонента источника видео
   */
  componentDidMount() {
    if (this._videoRef.current) {
      const {muted, src} = this.props;
      const video = this._videoRef.current;

      video.muted = muted;
      video.src = src;
    }
  }


  /**
   * Метод, выполняющий очистку таймаута
   */
  componentWillUnmount() {
    if (this._videoRef.current) {
      clearTimeout(this._timeout);
    }
  }


  /**
   * Метод, обеспечивающий вызов методов начала и остановки воспроизведения
   * @return {Function}
   */
  componentDidUpdate() {
    const {isPlaying} = this.props;

    return isPlaying ? this._handlePlay() : this._handleStop();
  }


  /**
   * Метод, обеспечивающий начало воспроизведения трейлера фильма
   */
  _handlePlay() {
    this._timeout = setTimeout(() => {
      this._videoRef.current.play();
    }, Timeout.WAIT);
  }


  /**
   * Метод, обеспечивающий завершение воспроизведения трейлера фильма
   */
  _handleStop() {
    clearTimeout(this._timeout);
    this._videoRef.current.load();
  }
}


MoviePlayerPreview.propTypes = {
  cover: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired
};


export default MoviePlayerPreview;
