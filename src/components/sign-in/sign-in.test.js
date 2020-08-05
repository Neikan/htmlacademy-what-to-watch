// Импорт библиотек
import React from 'react';
import renderer from "react-test-renderer";
import {Router} from 'react-router-dom';
import history from "../../history.js";

// Импорт компонентов
import SignIn from "./sign-in.jsx";

describe(`Test SignIn component`, () => {
  test(`SignIn component is created and rendered correctly when no errors`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <SignIn
            errorLogin={false}
            errorPassword={false}
            onSubmit={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`SignIn component is created and rendered correctly when errorLogin === true`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <SignIn
            errorLogin={true}
            errorPassword={false}
            onSubmit={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`SignIn component is created and rendered correctly when errorPassword === true`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <SignIn
            errorLogin={false}
            errorPassword={true}
            onSubmit={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
