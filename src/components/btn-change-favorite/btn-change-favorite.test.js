// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import BtnChangeFavorite from "./btn-change-favorite.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "./../../consts/test-data";


describe(`Test BtnChangeFavorite component`, () => {
  test(`BtnChangeFavorite component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BtnChangeFavorite
          movie={MOVIES[0]}
          onChangeMyList={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
