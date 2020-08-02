// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

// Импорт компонентов
import GenreItem from "./genre-item.jsx";

// Импорт типов, констант, утилит
import {GENRES} from "../../consts/test-data";


describe(`Test GenreItem component`, () => {
  test(`Active GenreItem component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <GenreItem
            title={GENRES[0].title}
            isActive={GENRES[0].isActive}
            onGenreSelect={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Default GenreItem component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <GenreItem
            title={GENRES[1].title}
            isActive={GENRES[1].isActive}
            onGenreSelect={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
