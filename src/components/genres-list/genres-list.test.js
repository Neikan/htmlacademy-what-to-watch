// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import GenresList from "./genres-list.jsx";

// Импорт типов, констант, утилит
import {GENRES} from "../../consts/test-data.js";


describe(`Test GenresList component`, () => {
  test(`GenresList component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <GenresList
            genres={GENRES}
            onGenreSelect={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
