// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

// Импорт компонентов
import Logo from "./logo.jsx";

// Импорт типов, констант, утилит
import {LogoPosition} from "./../../consts/test-data";


describe(`Test Logo component`, () => {
  test(`Logo component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Logo
            logoPosition={LogoPosition.HEADER}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
