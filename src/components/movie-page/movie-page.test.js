// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import MoviePage from "./movie-page.jsx";

// Импорт типов, констант, утилит
import {MOVIES, MovieTabList, AuthStatus, UserDatumStateNoAuth, DatumStateAfterStart} from "../../consts/test-data.js";
import NameSpace from "../../store/name-space.js";


const mockStore = configureStore([]);


describe(`Test MoviePage component`, () => {
  const store = mockStore({
    [NameSpace.DATUM]: DatumStateAfterStart,
    [NameSpace.DATUM_USER]: UserDatumStateNoAuth
  });

  test(`MoviePage component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <MoviePage
              authStatus={AuthStatus.NO_AUTH}
              countShowedMovies={4}
              movie={MOVIES[0]}
              movies={MOVIES}
              onMovieSelect={() => {}}
              onMovieChangePlaying={() => {}}
              onTabSelect={() => {}}
              reviews={MOVIES[0].reviews}
              selectedTab={MovieTabList.OVERVIEW}
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
