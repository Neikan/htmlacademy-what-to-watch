import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import {movieType, genreType} from "../../props/prop-types.js";
import MoviePage from '../movie-page/movie-page.jsx';
import {Page} from "../../consts/common-data.js";
import {ActionCreator} from "../../store/reducer.js";
import {connect} from "react-redux";


const handleMoviePlay = () => {};
const handleMovieAddToList = () => {};


class App extends PureComponent {
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
    const {promoMovie, movies, genres, handleMovieSelect, handleGenreSelect} = this.props;

    return <Main
      promoMovie = {promoMovie}
      movies = {movies}
      genres = {genres}
      onMoviePlay = {handleMoviePlay}
      onMovieAddToList = {handleMovieAddToList}
      onMovieSelect = {handleMovieSelect}
      onGenreSelect = {handleGenreSelect}
    />;
  }


  /**
   * Метод, обеспечивающий отрисовку страницы фильма
   * @return {Object} страница фильма
   */
  _renderMoviePage() {
    const {selectedMovie, likedMovies, handleMovieSelect} = this.props;

    return <MoviePage
      movie={selectedMovie}
      movies={likedMovies}
      onMovieSelect = {handleMovieSelect}
    />;
  }
}


App.propTypes = {
  page: PropTypes.string.isRequired,

  movies: PropTypes.arrayOf(movieType).isRequired,
  promoMovie: movieType.isRequired,
  selectedMovie: movieType.isRequired,
  likedMovies: PropTypes.arrayOf(movieType).isRequired,

  genres: PropTypes.arrayOf(genreType).isRequired,

  handleMovieSelect: PropTypes.func.isRequired,
  handleGenreSelect: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  page: state.page,

  movies: state.movies,
  promoMovie: state.promoMovie,
  selectedMovie: state.selectedMovie,
  likedMovies: state.likedMovies,

  genres: state.genres,
  selectedGenre: state.selectedGenre
});


const mapDispatchToProps = (dispatch) => ({
  handleGenreSelect(genre) {
    dispatch(ActionCreator.selectGenre(genre));
  },

  handleMovieSelect(movie) {
    dispatch(ActionCreator.selectMovie(movie));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
