// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

// Импорт компонентов
import MoviePage from "./movie-page.jsx";

// Импорт типов, констант, утилит
import {MOVIES, MovieTabList, AuthStatus} from "../../consts/test-data.js";
import NameSpace from "../../store/name-space.js";


const mockStore = configureStore([]);


describe(`Test MoviePage component`, () => {
  const store = mockStore({
    [NameSpace.DATUM_USER]: {
      authStatus: AuthStatus.NO_AUTH,
      user: {
        id: ``,
        email: ``,
        name: ``,
        avatarUrl: ``
      },
    }
  });

  test(`MoviePage component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <MoviePage
              authStatus={AuthStatus.NO_AUTH}
              movie={MOVIES[0]}
              movies={MOVIES}
              countShowedMovies={4}
              onMovieSelect={() => {}}
              onMovieChangePlaying={() => {}}
              selectedTab={MovieTabList.OVERVIEW}
              onTabSelect={() => {}}
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
