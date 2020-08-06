// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import Logo from "./logo.jsx";

// Импорт типов, констант, утилит
import {LogoPosition} from "./../../consts/test-data";


describe(`Test Logo component`, () => {
  test(`Logo component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Logo
            logoPosition={LogoPosition.HEADER}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
