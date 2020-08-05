// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import BtnPlay from "./btn-play.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "./../../consts/test-data";


describe(`Test BtnPlay component`, () => {
  test(`BtnPlay component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <BtnPlay
            id={MOVIES[0].id}
            onChangePlaying={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
