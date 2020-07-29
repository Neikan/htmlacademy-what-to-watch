// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Импорт компонентов
import Loader from "../loader/loader.jsx";
import Main from "../main/main.jsx";
import MoviePage from '../movie-page/movie-page.jsx';
import MoviePlayer from "../movie-player/movie-player.jsx";
import SignIn from "../sign-in/sign-in.jsx";

// Импорт типов, констант, утилит
import {movieType, genreType} from "../../props/prop-types.js";
import {Page, ALL_GENRES, AuthStatus} from "../../consts/common-data.js";

// Импорт редьюсеров, селекторов
import {ActionCreator as ActionCreatorDatum} from "../../store/datum/datum.js";
import {Operation as OperationDatumUser} from "../../store/datum-user/operations.js";
import {getAuthStatus} from "../../store/datum-user/selectors.js";
import {
  getPage,
  getMovies,
  getPromoMovie,
  getIsPlayingMovie,
  getCountShowedMovies,
  getSelectedGenre,
  getSelectedMovie,
  getLikedMovies,
  getGenres
} from "../../store/datum/selectors.js";

// Импорт хоков
import withErrors from "../../hoc/with-errors.js";
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
  /**
   * Метод, обспечивающий изменение страниц приложения
   * @return {Object} страница приложения
   */
  render() {
    if (!this.props.promoMovie) {
      return <Loader />;
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={`${Page.MAIN}`}>
            {this._renderPage()}
          </Route>

          <Route exact path={`${Page.MOVIE}`}>
            {this._renderMoviePage()}
          </Route>

          <Route exact path={`${Page.LOGIN}`}>
            {this._renderSignIn()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }


  /**
   * Метод, обеспечивающий отрисовку страницы приложения
   * @return {Object} страница приложения
   */
  _renderPage() {
    if (this.props.isPlayingMovie) {
      return this._renderMoviePlayer();
    }

    switch (this.props.page) {
      case (Page.MAIN):
        return this._renderMainPage();

      case (Page.MOVIE):
        return this._renderMoviePage();

      default:
        return null;
    }
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
      onMovieSelect,
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
      onMovieSelect={onMovieSelect}
      onGenreSelect={onGenreSelect}
      onShowMore={onShowMore}
    />;
  }


  /**
   * Метод, обеспечивающий отрисовку страницы фильма
   * @return {Object} страница фильма
   */
  _renderMoviePage() {
    const {selectedMovie, likedMovies, onMovieSelect, onMovieChangePlaying} = this.props;

    return <MoviePageWrapped
      movie={selectedMovie}
      movies={likedMovies}
      onMovieSelect={onMovieSelect}
      onMovieChangePlaying={onMovieChangePlaying}
    />;
  }


  /**
   * Метод, обеспечивающий отрисовку проигрывателя фильма
   * @return {Object} проигрыватель
   */
  _renderMoviePlayer() {
    const {selectedMovie, onMovieChangePlaying} = this.props;

    return (
      <MoviePlayerWrapped
        movie={selectedMovie}
        onClose={onMovieChangePlaying}
      />
    );
  }


  /**
   * Метод, обеспечивающий отрисовку страницы авторизации
   * @return {Object} страница авторизации
   */
  _renderSignIn() {
    const {authStatus, login} = this.props;

    if (authStatus === AuthStatus.NO_AUTH) {
      return (
        <SignInWrapped
          onSubmit={login}
        />
      );
    }

    if (authStatus === AuthStatus.AUTH) {
      return this._renderPage();
    }

    return null;
  }
}


App.propTypes = {
  page: PropTypes.string.isRequired,

  movies: PropTypes.arrayOf(movieType).isRequired,
  promoMovie: movieType,
  selectedMovie: movieType,
  likedMovies: PropTypes.arrayOf(movieType).isRequired,
  countShowedMovies: PropTypes.number.isRequired,
  isPlayingMovie: PropTypes.bool.isRequired,

  genres: PropTypes.arrayOf(genreType).isRequired,
  selectedGenre: PropTypes.string.isRequired,

  onMovieSelect: PropTypes.func.isRequired,
  onMovieChangePlaying: PropTypes.func.isRequired,
  onGenreSelect: PropTypes.func.isRequired,

  onShowMore: PropTypes.func.isRequired,

  authStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  page: getPage(state),

  movies: getMovies(state),
  promoMovie: getPromoMovie(state),
  selectedMovie: getSelectedMovie(state),
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

  onMovieSelect(movie) {
    dispatch(ActionCreatorDatum.selectMovie(movie));
  },

  onMovieChangePlaying() {
    dispatch(ActionCreatorDatum.changePlayingMovie());
  },

  onShowMore() {
    dispatch(ActionCreatorDatum.showMore());
  },

  login(authData) {
    dispatch(OperationDatumUser.login(authData));
    dispatch(ActionCreatorDatum.setMainPage);
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
