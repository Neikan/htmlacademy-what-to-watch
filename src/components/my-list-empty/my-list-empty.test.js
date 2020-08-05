// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MyListEmpty from "./my-list-empty.jsx";


describe(`Test MyListEmpty component`, () => {
  test(`MyListEmpty component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MyListEmpty />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
