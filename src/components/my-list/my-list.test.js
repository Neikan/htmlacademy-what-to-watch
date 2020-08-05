// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

// Импорт компонентов
import MyList from "./my-list.jsx";

// Импорт типов, констант, утилит
import {FAVORITE_MOVIES, DatumStateAfterStart, DatumUserStateNoAuth} from "../../consts/test-data.js";
import NameSpace from "../../store/name-space.js";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock(`react-router-dom`);
const store = mockStore({
  [NameSpace.DATUM]: DatumStateAfterStart,
  [NameSpace.DATUM_USER]: DatumUserStateNoAuth
});

store.dispatch = jest.fn();


describe(`Test MyList component`, () => {
  test(`MyList component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <MyList
            favoriteMovies={FAVORITE_MOVIES}
            isLoadingFavoriteMovies={false}
            onFavoriteMoviesLoad={() => {}}
            onMovieSelect={() => {}}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
