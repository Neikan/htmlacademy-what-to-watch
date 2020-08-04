// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// Импорт компонентов
import BtnAddReview from "../btn-add-review/btn-add-review.jsx";
import BtnAddToFavorite from "../btn-add-to-favorite/btn-add-to-favorite.jsx";
import BtnPlay from "../btn-play/btn-play.jsx";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieOverView from "../movie-overview/movie-overview.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import MoviesByGenre from "../movies-by-genre/movies-by-genre.jsx";
import MovieTabs from "../movie-tabs/movie-tabs.jsx";

// Импорт типов, констант, утилит
import {movieType, reviewType} from "../../props/prop-types.js";
import {MovieTabList, CountMovies} from "../../consts/common-data.js";
import {getLikedMoviesByGenre} from "../../utils/common.js";

// Импорт редьюсеров, селекторов
import {Operation as OperationDatum} from '../../store/datum/operations.js';
import {getReviews} from "../../store/datum/selectors.js";


/**
 * Создание компонента, обеспечивающего отображение страницы с вкладками информации о фильме
 */
class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChangePlaying = this._handleChangePlaying.bind(this);
  }


  /**
   * Метод, обеспечивающий отображение компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {authStatus, movie, onTabSelect, reviews, selectedTab} = this.props;
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
                  isReviews={reviews.length > 0 ? true : false}
                  onTabSelect={onTabSelect}
                  selectedTab={selectedTab}
                  tabs={MovieTabList}
                />

                {this._renderMovieDesc()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          {this._renderMoviesByGenre()}

          <Footer />
        </div>
      </>
    );
  }


  /**
   * Метод, обеспечивабщий загрузку отзывов
   */
  componentDidMount() {
    const {movie, onReviewsLoad} = this.props;

    onReviewsLoad(movie);
  }


  /**
   * Метод, обеспечивающий обновление загруженных отзывов
   * @param {Object} nextProps
   */
  componentDidUpdate(nextProps) {
    const {movie, onReviewsLoad} = this.props;

    if (nextProps.movie !== movie) {
      onReviewsLoad(movie);
    }
  }


  /**
   * Метод, обеспечивающий отображение содержимого выбранной вкладки
   * @return {Object} созданный компонент
   */
  _renderMovieDesc() {
    const {movie, reviews, selectedTab} = this.props;

    switch (selectedTab) {
      case MovieTabList.OVERVIEW:
        return <MovieOverView movie={movie} />;

      case MovieTabList.DETAILS:
        return <MovieDetails movie={movie} />;

      case MovieTabList.REVIEWS:
        return <MovieReviews reviews={reviews} />;

      default:
        return null;
    }
  }


  /**
   * Метод, обеспечивающий отображение списка похожих фильмов
   * @return {Object} созданный компонент
   */
  _renderMoviesByGenre() {
    const {movie, movies, onMovieSelect} = this.props;

    const likedMovies = getLikedMoviesByGenre(movies, movie.id);

    if (!likedMovies.length || likedMovies.length === 0) {
      return null;
    }

    return (
      <MoviesByGenre
        countShowedMovies={CountMovies.LIKED_BY_GENRE}
        movies={getLikedMoviesByGenre(movies, movie.id)}
        onMovieSelect={onMovieSelect}
      />
    );
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
  onReviewsLoad: PropTypes.func.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(reviewType).isRequired,
  selectedTab: PropTypes.string.isRequired
};


const mapStateToProps = (state) => ({
  reviews: getReviews(state)
});


const mapDispatchToProps = (dispatch) => ({
  onReviewsLoad(movie) {
    dispatch(OperationDatum.loadReviews(movie));
  },
});


export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
