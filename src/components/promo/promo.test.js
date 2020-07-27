// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import Promo from "./promo.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test Promo component`, () => {
  test(`Promo component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Promo
          movie={MOVIES[0]}
          onAdd={() => {}}
          onChangePlaying={() => {}}
          onSelect={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
