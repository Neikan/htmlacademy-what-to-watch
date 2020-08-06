// Импорт типов, констант, утилит
import {GENRES, MOVIES, CountMovies, FAVORITE_MOVIES} from "../../consts/test-data.js";
import {getMoviesByGenre,
  getUniqueGenres,
  updateGenres,
  updateMovies,
  updatePromo
} from "../../utils/common.js";

// Импорт редьюсеров, селекторов
import {ActionType, reducer, ActionCreator} from "./datum.js";


describe(`Get initial state`, () => {
  test(`Return initial state`, () => {
    const initialState = {
      countShowedMovies: CountMovies.START,
      favoriteMovies: [],
      genres: GENRES,

      isLoadingFavoriteMovies: true,
      isLoadingMovies: true,
      isLoadingPromo: true,
      isLoadingReviews: true,
      isPlayingMovie: false,

      likedMovies: getMoviesByGenre(MOVIES, MOVIES[0].genre),
      movies: MOVIES,
      promoMovie: MOVIES[0],
      reviews: [],
      selectedGenre: GENRES[0]
    };

    expect(reducer(initialState, {})).toEqual({
      countShowedMovies: CountMovies.START,
      favoriteMovies: [],
      genres: GENRES,

      isLoadingFavoriteMovies: true,
      isLoadingMovies: true,
      isLoadingPromo: true,
      isLoadingReviews: true,
      isPlayingMovie: false,

      likedMovies: getMoviesByGenre(MOVIES, MOVIES[0].genre),
      movies: MOVIES,
      promoMovie: MOVIES[0],
      reviews: [],
      selectedGenre: GENRES[0]
    });
  });
});


describe(`Action types work correctly`, () => {
  test(`Return new isPlayingMovie`, () => {
    expect(reducer({
      isPlayingMovie: true
    }, {
      type: ActionType.CHANGE_PLAYING_MOVIE,
      payload: null
    })).toEqual({
      isPlayingMovie: false
    });
  });


  test(`Return new isLoadingFavoriteMovies`, () => {
    expect(reducer({
      isLoadingFavoriteMovies: true
    }, {
      type: ActionType.IS_LOADING_FAVORITE_MOVIES,
      payload: false
    })).toEqual({
      isLoadingFavoriteMovies: false
    });
  });


  test(`Return new isLoadingMovies`, () => {
    expect(reducer({
      isLoadingMovies: true
    }, {
      type: ActionType.IS_LOADING_MOVIES,
      payload: false
    })).toEqual({
      isLoadingMovies: false
    });
  });


  test(`Return new isLoadingPromo`, () => {
    expect(reducer({
      isLoadingPromo: true
    }, {
      type: ActionType.IS_LOADING_PROMO_MOVIE,
      payload: false
    })).toEqual({
      isLoadingPromo: false
    });
  });


  test(`Return new isLoadingReviews`, () => {
    expect(reducer({
      isLoadingReviews: true
    }, {
      type: ActionType.IS_LOADING_REVIEWS,
      payload: false
    })).toEqual({
      isLoadingReviews: false
    });
  });


  test(`Return favoriteMovies`, () => {
    expect(reducer({
      favoriteMovies: []
    }, {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: FAVORITE_MOVIES
    })).toEqual({
      favoriteMovies: FAVORITE_MOVIES
    });
  });


  test(`Return movies and etc.`, () => {
    expect(reducer({
      movies: [],
      likedMovies: [],
      genres: []
    }, {
      type: ActionType.LOAD_MOVIES,
      payload: MOVIES
    })).toEqual({
      movies: MOVIES,
      likedMovies: MOVIES,
      genres: getUniqueGenres(MOVIES)
    });
  });


  test(`Return promoMovie`, () => {
    expect(reducer({
      promoMovie: null
    }, {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: MOVIES[0]
    })).toEqual({
      promoMovie: MOVIES[0]
    });
  });


  test(`Return more showed movies`, () => {
    expect(reducer({
      reviews: []
    }, {
      type: ActionType.SET_REVIEWS,
      payload: MOVIES[2].reviews
    })).toEqual({
      reviews: MOVIES[2].reviews
    });
  });


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


  test(`Return likedMovies`, () => {
    expect(reducer({
      movies: MOVIES,
      likedMovies: MOVIES,
    }, {
      type: ActionType.SET_LIKED_MOVIES,
      payload: GENRES[2]
    })).toEqual({
      movies: MOVIES,
      likedMovies: getMoviesByGenre(MOVIES, GENRES[2])
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


  test(`Return new movies`, () => {
    expect(reducer({
      movies: MOVIES,
      promoMovie: MOVIES[0],
    }, {
      type: ActionType.UPDATE_MOVIES,
      payload: MOVIES[1]
    })).toEqual({
      movies: updateMovies(MOVIES, MOVIES[1]),
      promoMovie: updatePromo(MOVIES[0], MOVIES[1])
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


  test(`changePlayingMovie returns correct action`, () => {
    expect(ActionCreator.changePlayingMovie()).toEqual({
      type: ActionType.CHANGE_PLAYING_MOVIE,
      payload: null
    });
  });

  test(`isLoadingFavoriteMovies returns correct action`, () => {
    expect(ActionCreator.isLoadingFavoriteMovies(false)).toEqual({
      type: ActionType.IS_LOADING_FAVORITE_MOVIES,
      payload: false
    });
  });


  test(`isLoadingMovies returns correct action`, () => {
    expect(ActionCreator.isLoadingMovies(false)).toEqual({
      type: ActionType.IS_LOADING_MOVIES,
      payload: false
    });
  });


  test(`isLoadingPromo returns correct action`, () => {
    expect(ActionCreator.isLoadingPromo(false)).toEqual({
      type: ActionType.IS_LOADING_PROMO_MOVIE,
      payload: false
    });
  });


  test(`isLoadingReviews returns correct action`, () => {
    expect(ActionCreator.isLoadingReviews(false)).toEqual({
      type: ActionType.IS_LOADING_REVIEWS,
      payload: false
    });
  });


  test(`loadFavoriteMovies returns correct action`, () => {
    expect(ActionCreator.loadFavoriteMovies(FAVORITE_MOVIES)).toEqual({
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: FAVORITE_MOVIES
    });
  });


  test(`setLikedMovies returns correct action`, () => {
    expect(ActionCreator.setLikedMovies(MOVIES)).toEqual({
      type: ActionType.SET_LIKED_MOVIES,
      payload: MOVIES
    });
  });


  test(`setReviews returns correct action`, () => {
    expect(ActionCreator.setReviews(MOVIES[1].reviews)).toEqual({
      type: ActionType.SET_REVIEWS,
      payload: MOVIES[1].reviews
    });
  });


  test(`updateMovies returns correct action`, () => {
    expect(ActionCreator.updateMovies(MOVIES[0])).toEqual({
      type: ActionType.UPDATE_MOVIES,
      payload: MOVIES[0]
    });
  });
});
