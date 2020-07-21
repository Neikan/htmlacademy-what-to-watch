import {Page, CountMovies} from "../consts/common-data";
import {getLikedMoviesByGenre, getMoviesByGenre, updateGenres, getGenres} from "../utils/common";
import {generateMovies} from "../mocks/movies-data";
import {updateState} from "../utils/reducer";


const movies = generateMovies(CountMovies.ALL);
const promoMovie = movies[0];
const genres = getGenres(movies);


const initialState = {
  page: Page.MAIN,

  movies,
  promoMovie,
  selectedMovie: promoMovie,
  likedMovies: movies,

  genres,
  selectedGenre: genres[0].title
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
        likedMovies: getMoviesByGenre(state.movies, action.payload),
        genres: updateGenres(state.genres, action.payload),
        selectedGenre: action.payload
      });

    case ActionType.SELECT_MOVIE:
      return updateState(state, {
        page: Page.MOVIE,
        selectedMovie: action.payload,
        likedMovies: getLikedMoviesByGenre(state.movies, action.payload.genre, action.payload.id),
      });

    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
