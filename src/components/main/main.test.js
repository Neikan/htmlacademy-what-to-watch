// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

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
        <BrowserRouter>
          <Provider store={store}>
            <Main
              promoMovie={MOVIES[0]}
              movies={MOVIES}
              genres={GENRES}
              countShowedMovies={1}
              onMovieChangePlaying={() => {}}
              onMovieAddToList={() => {}}
              onMovieSelect={() => {}}
              onGenreSelect={() => {}}
              onShowMore={() => {}}
            />
          </Provider>
        </BrowserRouter>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
