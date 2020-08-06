// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import BtnExit from "./btn-exit.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../../../consts/test-data.js";


describe(`Test BtnExit component`, () => {
  test(`BtnExit component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BtnExit
          id={MOVIES[0].id}
          onClose={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
