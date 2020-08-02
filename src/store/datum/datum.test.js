// Импорт типов, констант, утилит
import {GENRES, MOVIES, Page, CountMovies} from "../../consts/test-data.js";
import {getLikedMoviesByGenre, getMoviesByGenre, updateGenres} from "../../utils/common.js";

// Импорт редьюсеров, селекторов
import {ActionType, reducer, ActionCreator} from "./datum.js";


describe(`Get initial state`, () => {
  test(`Return initial state`, () => {
    const initialState = {
      page: Page.MAIN,

      movies: MOVIES,
      promoMovie: MOVIES[0],
      selectedMovie: MOVIES[0],
      likedMovies: getLikedMoviesByGenre(MOVIES, MOVIES[0].genre, MOVIES[0].id),
      countShowedMovies: CountMovies.START,
      isPlayingMovie: false,

      genres: GENRES,
      selectedGenre: GENRES[0]
    };

    expect(reducer(initialState, {})).toEqual({
      page: Page.MAIN,

      movies: MOVIES,
      promoMovie: MOVIES[0],
      selectedMovie: MOVIES[0],
      likedMovies: getLikedMoviesByGenre(MOVIES, MOVIES[0].genre, MOVIES[0].id),
      countShowedMovies: CountMovies.START,
      isPlayingMovie: false,

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
      countShowedMovies: CountMovies.START,
      genres: GENRES,
      selectedGenre: GENRES[0]
    }, {
      type: ActionType.SELECT_GENRE,
      payload: GENRES[2]
    })).toEqual({
      movies: MOVIES,
      likedMovies: getMoviesByGenre(MOVIES, GENRES[2]),
      countShowedMovies: CountMovies.START,
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


  test(`Return more showed movies`, () => {
    expect(reducer({
      movies: MOVIES,
      countShowedMovies: 1
    }, {
      type: ActionType.SHOW_MORE,
      payload: 1
    })).toEqual({
      movies: MOVIES,
      countShowedMovies: 2
    });
  });


  test(`Return more showed movies`, () => {
    expect(reducer({
      movies: MOVIES,
      isPlayingMovie: false,
    }, {
      type: ActionType.CHANGE_PLAYING_MOVIE,
      payload: null
    })).toEqual({
      movies: MOVIES,
      isPlayingMovie: true
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


  test(`Select movie returns correct action`, () => {
    expect(ActionCreator.showMore()).toEqual({
      type: ActionType.SHOW_MORE,
      payload: CountMovies.START
    });
  });


  test(`ChangePlaying returns correct action`, () => {
    expect(ActionCreator.changePlayingMovie()).toEqual({
      type: ActionType.CHANGE_PLAYING_MOVIE,
      payload: null
    });
  });


  test(`LoadMovies returns correct action`, () => {
    expect(ActionCreator.loadMovies(MOVIES)).toEqual({
      type: ActionType.LOAD_MOVIES,
      payload: MOVIES
    });
  });


  test(`LoadPromoMovie returns correct action`, () => {
    expect(ActionCreator.loadPromoMovie(MOVIES[1])).toEqual({
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: MOVIES[1]
    });
  });
});
