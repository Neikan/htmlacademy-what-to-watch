// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';

// Импорт компонентов
import GenresList from "./genres-list.jsx";

// Импорт типов, констант, утилит
import {GENRES} from "../../consts/test-data.js";


describe(`Test GenresList component`, () => {
  test(`GenresList component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <GenresList
            genres={GENRES}
            onGenreSelect={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
