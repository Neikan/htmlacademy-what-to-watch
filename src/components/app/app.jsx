// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Импорт компонентов
import Main from "../main/main.jsx";
import MoviePage from '../movie-page/movie-page.jsx';
import MoviePlayer from "../movie-player/movie-player.jsx";

// Импорт типов, констант, утилит
import {movieType, genreType} from "../../props/prop-types.js";
import {Page, ALL_GENRES} from "../../consts/common-data.js";

// Импорт редьюсеров
import {ActionCreator} from "../../store/reducer.js";

// Импорт хоков
import withSelectedTab from "../../hoc/with-selected-tab/with-selected-tab.js";
import withPlayerControls from "../../hoc/with-player-controls/with-player-controls.js";


const handleMovieAddToList = () => {};

const MoviePageWrapped = withSelectedTab(MoviePage);
const MoviePlayerWrapped = withPlayerControls(MoviePlayer);


/**
 * Создание главного компонента приложения
 */
class App extends PureComponent {
  constructor(props) {
    super(props);
  }


  /**
   * Метод, обспечивающий изменение страниц приложения
   * @return {Object} страница приложения
   */
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={`${Page.MAIN}`}>
            {this._renderPage()}
          </Route>

          <Route exact path={`${Page.MOVIE}:${this.props.selectedMovie.id}`}>
            {this._renderMoviePage()}
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
}


App.propTypes = {
  page: PropTypes.string.isRequired,

  movies: PropTypes.arrayOf(movieType).isRequired,
  promoMovie: movieType.isRequired,
  selectedMovie: movieType.isRequired,
  likedMovies: PropTypes.arrayOf(movieType).isRequired,
  countShowedMovies: PropTypes.number.isRequired,
  isPlayingMovie: PropTypes.bool.isRequired,

  genres: PropTypes.arrayOf(genreType).isRequired,
  selectedGenre: PropTypes.string.isRequired,

  onMovieSelect: PropTypes.func.isRequired,
  onMovieChangePlaying: PropTypes.func.isRequired,
  onGenreSelect: PropTypes.func.isRequired,

  onShowMore: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  page: state.page,

  movies: state.movies,
  promoMovie: state.promoMovie,
  selectedMovie: state.selectedMovie,
  likedMovies: state.likedMovies,
  countShowedMovies: state.countShowedMovies,
  isPlayingMovie: state.isPlayingMovie,

  genres: state.genres,
  selectedGenre: state.selectedGenre
});


const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreator.selectGenre(genre));
  },

  onMovieSelect(movie) {
    dispatch(ActionCreator.selectMovie(movie));
  },

  onMovieChangePlaying() {
    dispatch(ActionCreator.changePlayingMovie());
  },

  onShowMore() {
    dispatch(ActionCreator.showMore());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
