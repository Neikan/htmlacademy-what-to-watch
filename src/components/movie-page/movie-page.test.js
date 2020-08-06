// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

// Импорт компонентов
import {MoviePage} from "./movie-page.jsx";

// Импорт типов, констант, утилит
import {
  MOVIES,
  MovieTabList,
  AuthStatus,
  DatumUserStateNoAuth,
  DatumStateAfterStart
} from "../../consts/test-data.js";
import NameSpace from "../../store/name-space.js";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock(`react-router-dom`);


describe(`Test MoviePage component`, () => {
  test(`MoviePage component is created and rendered correctly`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_USER]: DatumUserStateNoAuth
    });

    store.dispatch = jest.fn();

    const tree = renderer.create(
        <Provider store={store}>
          <MoviePage
            authStatus={AuthStatus.NO_AUTH}
            countShowedMovies={4}
            movie={MOVIES[0]}
            movies={MOVIES}
            onMovieSelect={() => {}}
            onMovieChangeMyList={() => {}}
            onMovieChangePlaying={() => {}}
            onReviewsLoad={() => {}}
            onTabSelect={() => {}}
            reviews={MOVIES[0].reviews}
            selectedTab={MovieTabList.OVERVIEW}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
