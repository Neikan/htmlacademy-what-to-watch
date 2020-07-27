// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

// Импорт компонентов
import App from "./app.jsx";

// Импорт типов, констант, утилит
import {Page, CountMovies, MOVIES, GENRES} from "./../../consts/test-data";
import {getLikedMoviesByGenre, getMoviesByGenre} from "../../utils/common.js";


const mockStore = configureStore([]);


describe(`Test App component`, () => {
  test(`App component is created and rendered correctly when page is Main`, () => {
    const store = mockStore({
      page: Page.MAIN,

      movies: MOVIES,
      promoMovie: MOVIES[0],
      selectedMovie: MOVIES[0],
      likedMovies: getLikedMoviesByGenre(MOVIES, MOVIES[0].genre, MOVIES[0].id),
      countShowedMovies: CountMovies.START,
      isPlayingMovie: false,

      genres: GENRES,
      selectedGenre: GENRES[0].title
    });


    const tree = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`App component is created and rendered correctly when page is Movie`, () => {
    const store = mockStore({
      page: Page.MOVIE,

      movies: MOVIES,
      promoMovie: MOVIES[0],
      selectedMovie: MOVIES[1],
      likedMovies: getLikedMoviesByGenre(MOVIES, MOVIES[1].genre, MOVIES[1].id),
      countShowedMovies: CountMovies.START,
      isPlayingMovie: false,

      genres: GENRES,
      selectedGenre: GENRES[0].title
    });


    const tree = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`App component is created and rendered correctly when select Genre`, () => {
    const store = mockStore({
      page: Page.MAIN,

      movies: MOVIES,
      promoMovie: MOVIES[0],
      selectedMovie: MOVIES[0],
      likedMovies: getMoviesByGenre(MOVIES, GENRES[1]),
      countShowedMovies: CountMovies.START,
      isPlayingMovie: false,

      genres: GENRES,
      selectedGenre: GENRES[1].title
    });


    const tree = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
