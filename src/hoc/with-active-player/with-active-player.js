import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {movieType} from "../../props/prop-types";


const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this._handlePlay = this._handlePlay.bind(this);
      this._handlePlayingStop = this._handlePlayingStop.bind(this);
      this._handleSelect = this._handleSelect.bind(this);
    }


    /**
     * Метод, обеспечивающий отрисовку компонента
     * @return {Object} созданный компонент
     */
    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onPlay={this._handlePlay}
          onStop={this._handlePlayingStop}
          onSelect={this._handleSelect}
        />
      );
    }


    /**
     * Метод, обспечивающий запуск воспроизведения трейлера фильма
     * @param {Object} movieId идентификатор фильма
     */
    _handlePlay() {
      const {movie, onPlay} = this.props;

      onPlay(movie.id);
      this.setState({
        isPlaying: true
      });
    }


    /**
     * Метод, обспечивающий остановку воспроизведения трейлера фильма
     * @param {Object} movieId идентификатор фильма
     */
    _handlePlayingStop() {
      this.props.onPlayingStop();
      this.setState({
        isPlaying: false
      });
    }


    /**
     * Метод, обспечивающий передачу данных выбранного фильма для открытия его страницы
     * @param {Object} movieId идентификатор фильма
     */
    _handleSelect() {
      const {movie, onSelect} = this.props;

      onSelect(movie);
    }
  }


  WithActivePlayer.propTypes = {
    movie: movieType.isRequired,
    onSelect: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPlayingStop: PropTypes.func.isRequired
  };


  return WithActivePlayer;
};


export default withActivePlayer;
