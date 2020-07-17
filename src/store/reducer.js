import {Page, CountMovies, GENRES} from "../consts/common-data";
import {getLikedMoviesByGenre} from "../utils/common";
import {generateMovies} from "../mocks/movies-data";
import {updateState} from "../utils/reducer";


const movies = generateMovies(CountMovies.ALL);
const promoMovie = movies[0];


const initialState = {
  page: Page.MAIN,

  movies,
  promoMovie,
  selectedMovie: promoMovie,
  likedMovies: getLikedMoviesByGenre(movies, promoMovie.genre, promoMovie.id),

  genres: GENRES,
  selectedGenre: GENRES[0]
};


const ActionType = {
  SELECT_GENRE: `select genre`,
  SELECT_MOVIE: `select movie`
};


const ActionCreator = {
  selectGenre: (genre) => ({
    type: ActionType.SELECT_GENRE,
    payload: genre,
  }),

  selectMovie: (movie) => ({
    type: ActionType.SELECT_MOVIE,
    payload: movie,
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return updateState(state, {
        selectedGenre: action.payload,
      });

    case ActionType.SELECT_MOVIE:
      return updateState(state, {
        page: Page.MOVIE,
        selectedMovie: action.payload,
        likedMovies: getLikedMoviesByGenre(movies, action.payload.genre, action.payload.id),
      });


    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
