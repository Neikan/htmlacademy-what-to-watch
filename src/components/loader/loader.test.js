// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import Loader from "./loader.jsx";


describe(`Test Loader component`, () => {
  test(`Loader component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Loader />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
