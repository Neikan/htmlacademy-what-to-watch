// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import BtnFullScreen from "./btn-full-screen.jsx";


describe(`Test BtnFullScreen component`, () => {
  test(`BtnFullScreen component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BtnFullScreen
          onSelect={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
