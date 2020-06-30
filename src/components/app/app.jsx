import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import {movieType, genreType} from "../../props/prop-types.js";
import MoviePage from '../movie-page/movie-page.jsx';
import {Page} from "../../consts/common-data.js";
import {getLikedMoviesByGenre} from "../../utils/common.js";


const handleMoviePlay = () => {};
const handleMovieAddToList = () => {};
const handleGenreSelect = () => {};


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: Page.MAIN,
      selectedMovie: this.props.promoMovie
    };

    this._handleMovieSelect = this._handleMovieSelect.bind(this);
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={Page.MAIN}>
            {this._renderPage()}
          </Route>
          <Route exact path={Page.MOVIE + this.state.selectedMovie.id}>
            {this._renderMoviePage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }


  _renderPage() {
    switch (this.state.page) {
      case (Page.MAIN):
        return this._renderMainPage();

      case (Page.MOVIE):
        return this._renderMoviePage();
    }

    return null;
  }


  _renderMainPage() {
    const {promoMovie, movies, genres} = this.props;

    return <Main
      promoMovie = {promoMovie}
      movies = {movies}
      genres = {genres}
      onMoviePlay = {handleMoviePlay}
      onMovieAddToList = {handleMovieAddToList}
      onMovieSelect = {this._handleMovieSelect}
      onGenreSelect = {handleGenreSelect}
    />;
  }


  _renderMoviePage() {
    const {genre, id} = this.state.selectedMovie;

    return <MoviePage
      movie={this.state.selectedMovie}
      movies={getLikedMoviesByGenre(this.props.movies, genre, id)}
      onMovieSelect = {this._handleMovieSelect}
    />;
  }


  _handleMovieSelect(movie) {
    this.setState({
      page: Page.MOVIE,
      selectedMovie: movie
    });
  }
}


App.propTypes = {
  promoMovie: movieType.isRequired,
  movies: PropTypes.arrayOf(movieType).isRequired,
  genres: PropTypes.arrayOf(genreType).isRequired
};


export default App;
