// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

// Импорт компонентов
import Promo from "./promo.jsx";

// Импорт типов, констант, утилит
import {MOVIES, DatumStateAfterStart, DatumUserState} from "../../consts/test-data.js";
import NameSpace from "../../store/name-space.js";


const mockStore = configureStore([]);


describe(`Test Promo component`, () => {
  test(`Promo component is created and rendered correctly`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_USER]: DatumUserState
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <Promo
              movie={MOVIES[0]}
              onChangeMyList={() => {}}
              onChangePlaying={() => {}}
              onSelect={() => {}}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
