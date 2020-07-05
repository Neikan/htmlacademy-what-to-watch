import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {getImgSrc} from "../../utils/common";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timeout = null;
  }


  componentDidMount() {
    if (this._videoRef.current) {
      const {src, muted} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.muted = muted;
    }
  }


  componentWillUnmount() {
    if (this._videoRef.current) {
      const video = this._videoRef.current;

      video.src = null;
      video.muted = null;
      video.onplay = null;

      clearTimeout(this._timeout);
    }
  }


  componentDidUpdate() {
    return this.props.isPlaying ? this._handlePlay() : this._handleStop();
  }


  render() {
    return (
      <video width="280" height="175"
        poster={getImgSrc(this.props.cover)}
        ref={this._videoRef}
        type="video/webm"
      >
        Sorry, your browser doesn`t support embedded videos
      </video>
    );
  }


  _handlePlay() {
    this._timeout = setTimeout(() => {
      this._videoRef.current.play();
    }, 500);
  }


  _handleStop() {
    clearTimeout(this._timeout);
    this._videoRef.current.load();
  }
}


VideoPlayer.propTypes = {
  muted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};


export default VideoPlayer;
