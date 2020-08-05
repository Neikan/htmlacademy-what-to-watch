// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import LinkSignIn from "./link-sign-in.jsx";


describe(`Test LinkSignIn component`, () => {
  test(`LinkSignIn component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <LinkSignIn />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
