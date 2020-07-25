// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import BtnPause from "./btn-pause.jsx";


describe(`Test BtnPause component`, () => {
  test(`BtnPause component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BtnPause />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
