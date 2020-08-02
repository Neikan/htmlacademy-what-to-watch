// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// Импорт компонентов
import BtnAddReview from "../btn-add-review/btn-add-review.jsx";
import BtnAddToFavorite from "../btn-add-to-favorite/btn-add-to-favorite.jsx";
import BtnPlay from "../btn-play/btn-play.jsx";
import Header from "../header/header.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieOverView from "../movie-overview/movie-overview.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import MoviesByGenre from "../movies-by-genre/movies-by-genre.jsx";
import MovieTabs from "../movie-tabs/movie-tabs.jsx";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types.js";
import {MovieTabList, CountMovies, Page, AuthStatus} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего отображение страницы с вкладками информации о фильме
 */
class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChangePlaying = this._handleChangePlaying.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {authStatus, movie, selectedTab, onTabSelect} = this.props;
    const {backgroundColor, backgroundImage, genre, id, poster, title, year} = movie;

    return (
      <>
        <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>
          <div className="movie-card__hero">
            <MovieBackground
              backgroundImage={backgroundImage}
              title={title}
            />

            <h1 className="visually-hidden">WTW</h1>

            <Header />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{year}</span>
                </p>

                <div className="movie-card__buttons">
                  <BtnPlay
                    id={id}
                    onChangePlaying={this._handleChangePlaying}
                  />

                  <BtnAddToFavorite />
                  <BtnAddReview
                    authStatus={authStatus}
                    id={id}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={title} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <MovieTabs
                  tabs={MovieTabList}
                  selectedTab={selectedTab}
                  onTabSelect={onTabSelect}
                  isReviews={movie.reviews.length > 0 ? true : false}
                />

                {this._renderMovieDesc()}
              </div>
            </div>
          </div>
        </section>

        {this._renderMoviesByGenre()}
      </>
    );
  }


  /**
   * Метод, обеспечивающий отрисовку содержимого выбранной вкладки
   * @return {Object} созданный компонент
   */
  _renderMovieDesc() {
    const {movie, selectedTab} = this.props;

    switch (selectedTab) {
      case MovieTabList.OVERVIEW:
        return <MovieOverView movie={movie} />;

      case MovieTabList.DETAILS:
        return <MovieDetails movie={movie} />;

      case MovieTabList.REVIEWS:
        return <MovieReviews movie={movie} />;

      default:
        return null;
    }
  }


  /**
   * Метод, обеспечивающий отрисовку списка похожих фильмов
   * @return {Object} созданный компонент
   */
  _renderMoviesByGenre() {
    const {movies, onMovieSelect} = this.props;

    if (!movies.length || movies.length === 0) {
      return null;
    }

    return (
      <MoviesByGenre
        movies={movies}
        countShowedMovies={CountMovies.LIKED_BY_GENRE}
        onMovieSelect={onMovieSelect}
      />
    );
  }


  _renderAddReviewLink() {
    const {id} = this.props.movie;

    return this.props.authStatus === AuthStatus.AUTH
      ? <Link to={`/${Page.MOVIE}/${id}/${Page.ADD_REVIEW}`} className="btn movie-card__button">Add review</Link>
      : null;
  }


  /**
   * Метод, обеспечивающий управление проигрывателем фильма
   */
  _handleChangePlaying() {
    const {onMovieChangePlaying} = this.props;

    onMovieChangePlaying();
  }
}


MoviePage.propTypes = {
  authStatus: PropTypes.string.isRequired,
  movie: movieType.isRequired,
  movies: PropTypes.arrayOf(movieType).isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  onMovieChangePlaying: PropTypes.func.isRequired,

  selectedTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired
};


export default MoviePage;
