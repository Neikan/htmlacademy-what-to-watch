// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

// Импорт компонентов
import BtnChangeFavorite from "./btn-change-favorite.jsx";

// Импорт типов, констант, утилит
import {MOVIES, AuthStatus, DatumStateAfterStart, DatumUserState} from "./../../consts/test-data";
import NameSpace from "../../store/name-space.js";


const mockStore = configureStore([]);


describe(`Test BtnChangeFavorite component`, () => {
  test(`BtnChangeFavorite component is created and rendered correctly`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_USER]: DatumUserState
    });

    const tree = renderer.create(
        <Provider store={store}>
          <BtnChangeFavorite
            authStatus={AuthStatus.AUTH}
            movie={MOVIES[0]}
            onChangeMyList={() => {}}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
