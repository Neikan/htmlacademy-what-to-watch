// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import BtnPlay from "./btn-play.jsx";


describe(`Test BtnPlay component`, () => {
  test(`BtnPlay component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BtnPlay />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
