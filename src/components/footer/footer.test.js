// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import Footer from "./footer.jsx";

// Импорт типов, констант, утилит
import {LogoPosition} from "./../../consts/test-data";


describe(`Test Footer component`, () => {
  it(`Footer component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Footer
            logoPosition={LogoPosition.HEADER}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
