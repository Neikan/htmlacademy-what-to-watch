// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import Header from "./header.jsx";

// Импорт типов, констант, утилит
import {LogoPosition} from "./../../consts/test-data";


describe(`Test Header component`, () => {
  test(`Header component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Header
          logoPosition={LogoPosition.HEADER}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
