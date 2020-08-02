// Импорт библиотек
import React, {PureComponent, createRef} from "react";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types.js";
import {getTime} from "../../utils/common.js";


/**
 * Создание компонента, обеспечивающего добавление и работоспособность
 * элементам управления для проигрывателя фильма
 * @param {Object} Component "оборачиваемый" компонент
 * @return {Object} созданный компонент
 */
const withPlayerControls = (Component) => {
  class WithPlayerControls extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        duration: 0,
        currentTime: 0
      };

      this._videoRef = createRef();

      this._handleChangePlaying = this._handleChangePlaying.bind(this);
      this._handleSetFullScreen = this._handleSetFullScreen.bind(this);
    }


    /**
     * Метод, обеспечивающий отображение компонента
     * @return {Object} созданный компонент
     */
    render() {
      const {isPlaying, duration, currentTime} = this.state;
      const {movie} = this.props;

      const time = {
        duration,
        current: currentTime,
        left: getTime(duration - currentTime)
      };

      return <Component
        {...this.props}
        isPlaying={isPlaying}
        onChangePlaying={this._handleChangePlaying}
        onSetFullScreen={this._handleSetFullScreen}
        time={time}
      >
        <video
          className="player__video"
          poster={movie.cover}
          ref={this._videoRef}
          type="video/webm"
        >
          Sorry, your browser doesn`t support embedded videos
        </video>
      </Component>;
    }


    /**
     * Метод, обеспечивающий установку для компонента параметров видео
     */
    componentDidMount() {
      if (this._videoRef.current) {
        const video = this._videoRef.current;

        video.src = this.props.movie.video;

        video.play();
        this._handleGetDuration(video);
        this._handleGetCurrentTime(video);
      }
    }


    /**
     * Метод, выполняющий очистку для компонента параметров видео
     */
    componentWillUnmount() {
      if (this._videoRef.current) {
        const video = this._videoRef.current;

        video.src = ``;
        video.onplay = null;
        video.onloadedmetadata = null;
        video.ontimeupdate = null;
      }
    }


    /**
     * Метод, обеспечивающий вызов методов начала и остановки воспроизведения
     * @return {Function}
     */
    componentDidUpdate() {
      const video = this._videoRef.current;

      return this.state.isPlaying ? video.play() : video.pause();
    }


    /**
     * Метод, обеспечивающий получение длительности видео
     * @param {Object} video видео
     */
    _handleGetDuration(video) {
      video.onloadedmetadata = () => this.setState({
        duration: video.duration
      });
    }


    /**
     * Метод, обеспечивающий получение текущего времени воспроизведения видео
     * @param {Object} video видео
     */
    _handleGetCurrentTime(video) {
      video.ontimeupdate = () => this.setState({
        currentTime: Math.trunc(video.currentTime)
      });
    }


    /**
     * Метод, обеспечивающий переход проигрывателя между режимами удержания и воспроизведения
     */
    _handleChangePlaying() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying,
      });
    }


    /**
     * Метод, обеспечивающий перевод проигрывателя в полноэкранный режим
     */
    _handleSetFullScreen() {
      const video = this._videoRef.current;

      if (video) {
        video.requestFullscreen();
      }
    }
  }


  WithPlayerControls.propTypes = {
    movie: movieType.isRequired
  };


  return WithPlayerControls;
};


export default withPlayerControls;
