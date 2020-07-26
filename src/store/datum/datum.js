// Импорт типов, констант, утилит
import {Page, CountMovies, ALL_GENRES} from "../../consts/common-data";
import {getLikedMoviesByGenre, getMoviesByGenre, updateGenres, getUniqueGenres} from "../../utils/common";
import {updateState} from "../../utils/reducer";


const initialState = {
  page: Page.MAIN,

  movies: [],
  promoMovie: null,
  selectedMovie: null,
  likedMovies: [],
  countShowedMovies: CountMovies.START,
  isPlayingMovie: false,

  genres: [],
  selectedGenre: ALL_GENRES
};


const ActionType = {
  CHANGE_PLAYING_MOVIE: `change playing movie`,
  LOAD_MOVIES: `load movies`,
  LOAD_PROMO_MOVIE: `load promo movie`,
  SELECT_GENRE: `select genre`,
  SELECT_MOVIE: `select movie`,
  SHOW_MORE: `show more`
};


const ActionCreator = {
  changePlayingMovie: () => ({
    type: ActionType.CHANGE_PLAYING_MOVIE,
    payload: null
  }),

  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies
  }),

  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie
  }),

  selectGenre: (genre) => ({
    type: ActionType.SELECT_GENRE,
    payload: genre
  }),

  selectMovie: (movie) => ({
    type: ActionType.SELECT_MOVIE,
    payload: movie
  }),

  showMore: () => ({
    type: ActionType.SHOW_MORE,
    payload: CountMovies.START
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_PLAYING_MOVIE:
      return updateState(state, {
        isPlayingMovie: !state.isPlayingMovie
      });

    case ActionType.LOAD_MOVIES:
      return updateState(state, {
        movies: action.payload,
        likedMovies: action.payload,
        genres: getUniqueGenres(action.payload)
      });

    case ActionType.LOAD_PROMO_MOVIE:
      return updateState(state, {
        promoMovie: action.payload,
        selectedMovie: action.payload
      });

    case ActionType.SELECT_GENRE:
      return updateState(state, {
        likedMovies: getMoviesByGenre(state.movies, action.payload),
        genres: updateGenres(state.genres, action.payload),
        selectedGenre: action.payload,
        countShowedMovies: CountMovies.START
      });

    case ActionType.SELECT_MOVIE:
      return updateState(state, {
        page: Page.MOVIE,
        selectedMovie: action.payload,
        likedMovies: getLikedMoviesByGenre(state.movies, action.payload.genre, action.payload.id),
      });

    case ActionType.SHOW_MORE:
      return updateState(state, {
        countShowedMovies: state.countShowedMovies + action.payload
      });

    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
