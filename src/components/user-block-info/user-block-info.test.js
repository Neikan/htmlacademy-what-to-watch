// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import UserBlockInfo from "./user-block-info.jsx";

// Импорт типов, констант, утилит
import {DatumUserState} from "../../consts/test-data.js";


describe(`Test UserBlockInfo component`, () => {
  test(`UserBlockInfo component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <UserBlockInfo
            user={DatumUserState.user}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
