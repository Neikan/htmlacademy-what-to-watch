// Импорт библиотек
import React, {PureComponent, createRef} from "react";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types.js";
import {getTime, getImgSrc} from "../../utils/common.js";


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

      this._handlePlayingChange = this._handlePlayingChange.bind(this);
      this._handleSetFullScreen = this._handleSetFullScreen.bind(this);
    }


    componentDidMount() {
      if (this._videoRef.current) {
        const video = this._videoRef.current;

        video.src = this.props.movie.preview;

        video.play();
        this._handleGetDuration(video);
        this._handleGetCurrentTime(video);
      }
    }


    componentDidUpdate() {
      const video = this._videoRef.current;

      return this.state.isPlaying ? video.play() : video.pause();
    }


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
     * Метод, обеспечивающий отрисовку компонента
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
        time={time}
        isPlaying={isPlaying}
        onPlayingChange={this._handlePlayingChange}
        onSetFullScreen={this._handleSetFullScreen}
      >
        <video
          className="player__video"
          poster={getImgSrc(movie.cover)}
          ref={this._videoRef}
          type="video/webm"
        >
          Sorry, your browser doesn`t support embedded videos
        </video>
      </Component>;
    }


    _handleGetDuration(video) {
      video.onloadedmetadata = () => this.setState({
        duration: video.duration
      });
    }


    _handleGetCurrentTime(video) {
      video.ontimeupdate = () => this.setState({
        currentTime: Math.trunc(video.currentTime)
      });
    }


    _handlePlayingChange() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying,
      });
    }


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
