// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// Импорт компонентов
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import Loader from "../loader/loader.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import MyListEmpty from "../my-list-empty/my-list-empty.jsx";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types";

// Импорт редьюсеров, селекторов
import {Operation as OperationDatum} from '../../store/datum/operations.js';
import {getFavoriteMovies, getIsLoadingFavoriteMovies} from "../../store/datum/selectors.js";

// Импорт хоков
import withSelectedMovie from "../../hoc/with-selected-movie/with-selected-movie.js";


const MoviesListWrapped = withSelectedMovie(MoviesList);


/**
 * Создание компонента, обеспечивающего отображение списка избранных фильмов
 */
class MyList extends PureComponent {
  /**
   * Метод, обеспечивающий отображение компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {isLoadingFavoriteMovies} = this.props;

    return (
      <div className="user-page">
        <Header isMyList />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {isLoadingFavoriteMovies
            ? <Loader />
            : this._renderList()
          }
        </section>

        <Footer />
      </div>
    );
  }


  /**
   * Метод, обеспечивающий загрузку списка избранных фильмов
   */
  componentDidMount() {
    const {onFavoriteMoviesLoad} = this.props;

    onFavoriteMoviesLoad();
  }


  /**
   * Метод, обеспечивающий отображение списка избранных фильмов
   * в зависимости от их количества
   * @return {Object} компонент
   */
  _renderList() {
    const {favoriteMovies, onMovieSelect} = this.props;

    return !favoriteMovies.length || favoriteMovies.length === 0
      ? <MyListEmpty />
      : (
        <MoviesListWrapped
          movies={favoriteMovies}
          countShowedMovies={favoriteMovies.length}
          onMovieSelect={onMovieSelect}
        />);
  }
}


MyList.propTypes = {
  favoriteMovies: PropTypes.arrayOf(movieType),

  isLoadingFavoriteMovies: PropTypes.bool.isRequired,

  onFavoriteMoviesLoad: PropTypes.func.isRequired,
  onMovieSelect: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
  isLoadingFavoriteMovies: getIsLoadingFavoriteMovies(state),
});


const mapDispatchToProps = (dispatch) => ({
  onFavoriteMoviesLoad() {
    dispatch(OperationDatum.loadFavoriteMovies());
  },
});


export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
