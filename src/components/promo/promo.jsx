import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {movieType} from "../../props/prop-types";
import {getImgSrc} from "../../utils/common";


class Promo extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSelect = this._handleSelect.bind(this);
    this._handlePlay = this._handlePlay.bind(this);
    this._handleAdd = this._handleAdd.bind(this);
  }

  render() {
    const {movie} = this.props;
    const {title, poster, genre, year} = movie;

    return (
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div
            onClick={this._handleSelect}
            className="movie-card__poster"
          >
            <img src={getImgSrc(poster)} alt={title} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2
              onClick={this._handleSelect}
              className="movie-card__title"
            >
              {title}
            </h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                onClick={this._handlePlay}
                className="btn btn--play movie-card__button" type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button
                onClick={this._handleAdd}
                className="btn btn--list movie-card__button" type="button"
              >
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }


  _handleSelect() {
    const {movie, onSelect} = this.props;

    onSelect(movie);
  }


  _handlePlay() {
    const {movie, onPlay} = this.props;

    onPlay(movie);
  }

  _handleAdd() {
    const {movie, onAdd} = this.props;

    onAdd(movie);
  }
}


Promo.propTypes = {
  movie: movieType.isRequired,
  onPlay: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};


export default Promo;
