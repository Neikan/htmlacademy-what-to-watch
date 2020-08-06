// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import UserBlock from "./user-block.jsx";

// Импорт типов, констант, утилит
import {AuthStatus, DatumUserState} from "../../consts/test-data.js";


describe(`Test UserBlock component`, () => {
  test(`When the user is logged in component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <UserBlock
            authStatus={AuthStatus.AUTH}
            user={DatumUserState.user}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`When the user is not logged in component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <UserBlock
            authStatus={AuthStatus.NO_AUTH}
            user={DatumUserState.user}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
