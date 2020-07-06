import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {movieType} from "../../props/prop-types";
import VideoPlayer from "../video-player/video-player.jsx";


class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._handlePlay = this._handlePlay.bind(this);
    this._handleStop = this._handleStop.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
  }


  render() {
    const {id, title, cover, preview} = this.props.movie;

    return (
      <article
        onMouseEnter={this._handlePlay}
        onMouseLeave={this._handleStop}
        onClick={this._handleSelect}
        id={id}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <VideoPlayer muted
            isPlaying = {this.state.isPlaying}
            src = {preview}
            cover = {cover}
          />
        </div>
        <h3
          onClick={this._handleSelect}
          className="small-movie-card__title"
        >
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }


  _handlePlay() {
    const {movie, onMovieMouseEnter} = this.props;

    onMovieMouseEnter(movie);
    this.setState({
      isPlaying: true
    });
  }


  _handleStop() {
    this.props.onMovieMouseLeave();
    this.setState({
      isPlaying: false
    });
  }

  _handleSelect() {
    const {movie, onMovieSelect} = this.props;

    onMovieSelect(movie);
  }
}


MovieCard.propTypes = {
  movie: movieType.isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  onMovieMouseEnter: PropTypes.func.isRequired,
  onMovieMouseLeave: PropTypes.func.isRequired
};


export default MovieCard;
