// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import Promo from "./promo.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test Promo component`, () => {
  test(`Promo component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Promo
            movie={MOVIES[0]}
            onChangeMyList={() => {}}
            onChangePlaying={() => {}}
            onSelect={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
