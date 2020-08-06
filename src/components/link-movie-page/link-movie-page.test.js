// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import LinkMoviePage from "./link-movie-page.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test LinkMoviePage component`, () => {
  test(`LinkMoviePage component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <LinkMoviePage
            movie={MOVIES[0]}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
