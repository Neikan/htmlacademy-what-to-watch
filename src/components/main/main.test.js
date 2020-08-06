// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import Main from "./main.jsx";

// Импорт типов, констант, утилит
import {MOVIES, GENRES, AuthStatus} from "./../../consts/test-data";
import NameSpace from "../../store/name-space.js";


const mockStore = configureStore([]);


describe(`Test Main component`, () => {
  test(`Main component is created and rendered correctly`, () => {
    const store = mockStore({
      [NameSpace.DATUM_USER]: {
        authStatus: AuthStatus.AUTH,
        user: {
          id: `user-1`,
          email: `sladkov.e.m@outlook.com`,
          name: `Batman`,
          avatarUrl: `https://4.react.pages.academy/wtw/static/avatar/5.jpg`
        },
      }
    });

    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <Main
              countShowedMovies={1}
              genres={GENRES}
              movies={MOVIES}
              onGenreSelect={() => {}}
              onMovieChangeMyList={() => {}}
              onMovieChangePlaying={() => {}}
              onMovieSelect={() => {}}
              onShowMore={() => {}}
              promoMovie={MOVIES[0]}
            />
          </Provider>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
