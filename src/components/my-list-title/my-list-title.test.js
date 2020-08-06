// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MyListTitle from "./my-list-title.jsx";


describe(`Test MyListTitle component`, () => {
  test(`MyListTitle component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MyListTitle />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
