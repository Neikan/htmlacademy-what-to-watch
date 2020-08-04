// Импорт типов, констант, утилит
import {moviesAdapter, reviewsAdapter} from "./adapter";
import {Url} from "../../consts/common-data";

// Импорт редьюсеров, селекторов
import {ActionCreator} from "../../store/datum/datum.js";


const Operation = {
  loadMovies: () => (dispatch, getState, api) => (
    api.get(`/${Url.FILMS}`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data.map((movie) => moviesAdapter(movie))));
        dispatch(ActionCreator.isLoadingMovies(false));
      })
      .catch((err) => {
        throw err;
      })
  ),

  loadPromoMovie: () => (dispatch, getState, api) => (
    api.get(`/${Url.FILMS}/${Url.PROMO}`)
      .then((response) => moviesAdapter(response.data))
      .then((movie) => {
        dispatch(ActionCreator.loadPromoMovie(movie));
        dispatch(ActionCreator.isLoadingPromo(false));
      })
      .catch((err) => {
        throw err;
      })
  ),

  loadReviews: (movie) => (dispatch, getState, api) => (
    api.get(`/${Url.REVIEWS}/${movie.id}`)
      .then((response) => {
        dispatch(ActionCreator.setReviews(
            response.data.map((review) => reviewsAdapter(review)))
        );
        dispatch(ActionCreator.isLoadingReviews(false));
      })
      .catch((err) => {
        throw err;
      })
  )
};


export {Operation};
