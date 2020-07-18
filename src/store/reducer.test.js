import {ActionType, reducer, ActionCreator} from "./reducer.js";
import {Page} from "../consts/common-data.js";
import {GENRES, MOVIES} from "../consts/test-data.js";
import {getLikedMoviesByGenre, getMoviesByGenre, updateGenres} from "../utils/common.js";


describe(`Get initial state`, () => {
  test(`Return initial state`, () => {
    const initialState = {
      page: Page.MAIN,

      movies: MOVIES,
      promoMovie: MOVIES[0],
      selectedMovie: MOVIES[0],
      likedMovies: getLikedMoviesByGenre(MOVIES, MOVIES[0].genre, MOVIES[0].id),

      genres: GENRES,
      selectedGenre: GENRES[0]
    };

    expect(reducer(initialState, {})).toEqual({
      page: Page.MAIN,

      movies: MOVIES,
      promoMovie: MOVIES[0],
      selectedMovie: MOVIES[0],
      likedMovies: getLikedMoviesByGenre(MOVIES, MOVIES[0].genre, MOVIES[0].id),

      genres: GENRES,
      selectedGenre: GENRES[0]
    });
  });
});


describe(`Action types work correctly`, () => {
  test(`Return selected genre and liked movies by genre`, () => {
    expect(reducer({
      movies: MOVIES,
      likedMovies: MOVIES,
      genres: GENRES,
      selectedGenre: GENRES[0]
    }, {
      type: ActionType.SELECT_GENRE,
      payload: GENRES[2]
    })).toEqual({
      movies: MOVIES,
      likedMovies: getMoviesByGenre(MOVIES, GENRES[2]),
      genres: updateGenres(GENRES, GENRES[2]),
      selectedGenre: GENRES[2]
    });
  });


  test(`Return selected movie and liked movies by genre this movie, but without this movie`, () => {
    expect(reducer({
      page: Page.MAIN,
      movies: MOVIES,
      selectedMovie: MOVIES[0],
      likedMovies: getLikedMoviesByGenre(MOVIES, MOVIES[0].genre, MOVIES[0].id),
    }, {
      type: ActionType.SELECT_MOVIE,
      payload: MOVIES[1]
    })).toEqual({
      page: Page.MOVIE,
      movies: MOVIES,
      selectedMovie: MOVIES[1],
      likedMovies: getLikedMoviesByGenre(MOVIES, MOVIES[1].genre, MOVIES[1].id),
    });
  });
});


describe(`Action creators work correctly`, () => {
  test(`Select genre returns correct action`, () => {
    expect(ActionCreator.selectGenre(GENRES[1])).toEqual({
      type: ActionType.SELECT_GENRE,
      payload: GENRES[1]
    });
  });


  test(`Select movie returns correct action`, () => {
    expect(ActionCreator.selectMovie(MOVIES[1])).toEqual({
      type: ActionType.SELECT_MOVIE,
      payload: MOVIES[1]
    });
  });
});
