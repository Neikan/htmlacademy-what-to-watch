// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import BtnExit from "./btn-exit.jsx";


describe(`Test BtnExit component`, () => {
  test(`BtnExit component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BtnExit
          onClose={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
