// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router-dom";
import history from '../../history.js';

// Импорт компонентов
import AddReview from "../add-review/add-review.jsx";
import Loader from "../loader/loader.jsx";
import Main from "../main/main.jsx";
import MoviePage from '../movie-page/movie-page.jsx';
import MoviePlayer from "../movie-player/movie-player.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import SignIn from "../sign-in/sign-in.jsx";

// Импорт типов, констант, утилит
import {movieType, genreType} from "../../props/prop-types.js";
import {Page, ALL_GENRES, AuthStatus} from "../../consts/common-data.js";

// Импорт редьюсеров, селекторов
import {ActionCreator as ActionCreatorDatum} from "../../store/datum/datum.js";
import {Operation as OperationDatumUser} from "../../store/datum-user/operations.js";
import {getAuthStatus} from "../../store/datum-user/selectors.js";
import {
  getMovies,
  getPromoMovie,
  getIsPlayingMovie,
  getCountShowedMovies,
  getSelectedGenre,
  getLikedMovies,
  getGenres
} from "../../store/datum/selectors.js";

// Импорт хоков
import withErrors from "../../hoc/with-errors/with-errors.js";
import withPlayerControls from "../../hoc/with-player-controls/with-player-controls.js";
import withSelectedTab from "../../hoc/with-selected-tab/with-selected-tab.js";


const handleMovieAddToList = () => {};

const MoviePageWrapped = withSelectedTab(MoviePage);
const MoviePlayerWrapped = withPlayerControls(MoviePlayer);
const SignInWrapped = withErrors(SignIn);


/**
 * Создание главного компонента приложения
 */
class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMovieSelect = this._handleMovieSelect.bind(this);
    this._renderMoviePage = this._renderMoviePage.bind(this);
    this._renderMoviePlayer = this._renderMoviePlayer.bind(this);
    this._renderSignInPage = this._renderSignInPage.bind(this);
    this._renderAddReviewPage = this._renderAddReviewPage.bind(this);
  }


  /**
   * Метод, обспечивающий изменение страниц приложения
   * @return {Object} страница приложения
   */
  render() {
    const {promoMovie} = this.props;

    if (!promoMovie) {
      return <Loader />;
    }

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={`/${Page.MAIN}`}>
            {this._renderMainPage()}
          </Route>

          <Route exact
            path={`/${Page.LOGIN}`}
            render={this._renderSignInPage}
          />

          <Route exact
            path={`/${Page.PLAYER}/:id`}
            render={this._renderMoviePlayer}
          />

          <Route exact
            path={`/${Page.MOVIE}/:id`}
            render={this._renderMoviePage}
          />

          <PrivateRoute exact
            path={`/${Page.MOVIE}/:id/${Page.ADD_REVIEW}`}
            render={this._renderAddReviewPage}
          />
        </Switch>
      </Router>
    );
  }


  /**
   * Метод, обеспечивающий отрисовку главной страницы
   * @return {Object} главная страница
   */
  _renderMainPage() {
    const {
      promoMovie,
      movies,
      likedMovies,
      countShowedMovies,
      genres,
      selectedGenre,
      onMovieChangePlaying,
      onGenreSelect,
      onShowMore
    } = this.props;

    const renderedMovies = selectedGenre === ALL_GENRES ? movies : likedMovies;

    return <Main
      promoMovie={promoMovie}
      movies={renderedMovies}
      genres={genres}
      countShowedMovies={countShowedMovies}
      onMovieChangePlaying={onMovieChangePlaying}
      onMovieAddToList={handleMovieAddToList}
      onMovieSelect={this._handleMovieSelect}
      onGenreSelect={onGenreSelect}
      onShowMore={onShowMore}
    />;
  }


  /**
   * Метод, обеспечивающий отрисовку страницы фильма
   * @param {Object} routeProps параметры
   * @return {Object} страница фильма
   */
  _renderMoviePage(routeProps) {
    const {authStatus, likedMovies, onMovieChangePlaying} = this.props;

    return <MoviePageWrapped
      authStatus={authStatus}
      movie={this._handleGetSelectedMovie(routeProps)}
      movies={likedMovies}
      onMovieSelect={this._handleMovieSelect}
      onMovieChangePlaying={onMovieChangePlaying}
    />;
  }


  /**
   * Метод, обеспечивающий отрисовку проигрывателя фильма
   * @param {Object} routeProps параметры
   * @return {Object} страница проигрывателя фильма
   */
  _renderMoviePlayer(routeProps) {
    const {onMovieChangePlaying} = this.props;

    return (
      <MoviePlayerWrapped
        movie={this._handleGetSelectedMovie(routeProps)}
        onClose={onMovieChangePlaying}
      />
    );
  }


  /**
   * Метод, обеспечивающий отрисовку страницы авторизации
   * @param {Object} routeProps параметры
   * @return {Object} страница авторизации
   */
  _renderSignInPage(routeProps) {
    const {authStatus, onUserDatumSubmit} = this.props;

    return authStatus === AuthStatus.AUTH
      ? routeProps.history.goBack()
      : (
        <SignInWrapped
          onSubmit={onUserDatumSubmit}
        />);
  }


  /**
   * Метод, обеспечивающий отрисовку страницы отправки отзыва
   * @param {Object} routeProps параметры
   * @return {Object} страница отправки отзыва
   */
  _renderAddReviewPage(routeProps) {
    return (
      <AddReview
        movie={this._handleGetSelectedMovie(routeProps)}
      />
    );
  }


  /**
   * Метод, обеспечивающий получение маршрута для выбранного фильма
   * @param {Object} movie данные фильма
   */
  _handleMovieSelect(movie) {
    const {onLikedMoviesSet} = this.props;

    history.push(`/${Page.MOVIE}/${movie.id}`);

    onLikedMoviesSet(movie);
  }


  /**
   * Метод, обеспечивабщий получение данных выбранного фильма
   * @param {Object} routeProps параметры
   * @return {Object} данные выбранного фильма
   */
  _handleGetSelectedMovie(routeProps) {
    return this.props.movies.find((movie) => movie.id === routeProps.match.params.id);
  }
}


App.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  promoMovie: movieType,

  likedMovies: PropTypes.arrayOf(movieType).isRequired,
  countShowedMovies: PropTypes.number.isRequired,
  isPlayingMovie: PropTypes.bool.isRequired,

  genres: PropTypes.arrayOf(genreType).isRequired,
  selectedGenre: PropTypes.string.isRequired,

  onLikedMoviesSet: PropTypes.func.isRequired,
  onMovieChangePlaying: PropTypes.func.isRequired,
  onGenreSelect: PropTypes.func.isRequired,

  onShowMore: PropTypes.func.isRequired,

  authStatus: PropTypes.string.isRequired,
  onUserDatumSubmit: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  movies: getMovies(state),
  promoMovie: getPromoMovie(state),

  likedMovies: getLikedMovies(state),
  countShowedMovies: getCountShowedMovies(state),
  isPlayingMovie: getIsPlayingMovie(state),

  genres: getGenres(state),
  selectedGenre: getSelectedGenre(state),

  authStatus: getAuthStatus(state)
});


const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreatorDatum.selectGenre(genre));
  },

  onLikedMoviesSet(movie) {
    dispatch(ActionCreatorDatum.setLikedMovies(movie));
  },

  onMovieChangePlaying() {
    dispatch(ActionCreatorDatum.changePlayingMovie());
  },

  onShowMore() {
    dispatch(ActionCreatorDatum.showMore());
  },

  onUserDatumSubmit(userDatum) {
    dispatch(OperationDatumUser.login(userDatum));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
