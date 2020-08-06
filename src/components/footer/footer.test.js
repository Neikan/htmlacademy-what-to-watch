// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

// Импорт компонентов
import Footer from "./footer.jsx";

// Импорт типов, констант, утилит
import {LogoPosition} from "./../../consts/test-data";


describe(`Test Footer component`, () => {
  it(`Footer component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Footer
            logoPosition={LogoPosition.HEADER}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
