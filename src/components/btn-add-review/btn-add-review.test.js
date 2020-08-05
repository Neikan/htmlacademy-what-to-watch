// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import BtnAddReview from "./btn-add-review.jsx";

// Импорт типов, констант, утилит
import {AuthStatus, MOVIES} from "./../../consts/test-data";


describe(`Test BtnAddReview component`, () => {
  test(`BtnAddReview component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <BtnAddReview
            authStatus={AuthStatus.AUTH}
            id={MOVIES[0].id}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
