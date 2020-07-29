// Импорт типов, констант, утилит
import {moviesAdapter, commentsAdapter} from "./adapter";
import {Url} from "../../consts/common-data";

// Импорт редьюсеров, селекторов
import {ActionCreator} from "../../store/datum/datum.js";


const getAdaptedMovies = (dispatch) => (movie) => {
  const adaptedMovie = moviesAdapter(movie);

  dispatch(loadComments(adaptedMovie));

  return adaptedMovie;
};


const loadComments = (movie) => (dispatch, getState, api) => (
  api.get(`/${Url.COMMENTS}/${movie.id}`)
    .then((response) => {
      movie.reviews = response.data.map((review) => commentsAdapter(review));
    })
    .catch((err) => {
      throw err;
    })
);


const Operation = {
  loadMovies: () => (dispatch, getState, api) => (
    api.get(`/${Url.FILMS}`)
      .then((response) => dispatch(ActionCreator.loadMovies(
          response.data.map(getAdaptedMovies(dispatch))
      )))
      .catch((err) => {
        throw err;
      })
  ),

  loadPromoMovie: () => (dispatch, getState, api) => (
    api.get(`/${Url.FILMS}/${Url.PROMO}`)
      .then((response) => moviesAdapter(response.data))
      .then((movie) => {
        dispatch(loadComments(movie));

        return movie;
      })
      .then((movie) => dispatch(ActionCreator.loadPromoMovie(movie)))
      .catch((err) => {
        throw err;
      })
  ),
};


export {Operation};
