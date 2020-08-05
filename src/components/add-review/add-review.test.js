// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import AddReview from "./add-review.jsx";

// Импорт типов, констант, утилит
import {MOVIES, DatumUserState, DatumReviewState} from "./../../consts/test-data";
import NameSpace from "../../store/name-space.js";


const mockStore = configureStore([]);

describe(`Test AddReview component`, () => {
  test(`AddReview component is created and rendered correctly`, () => {
    const store = mockStore({
      [NameSpace.DATUM_USER]: DatumUserState,
      [NameSpace.DATUM_REVIEW]: DatumReviewState
    });

    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <AddReview
              movie={MOVIES[0]}
            />
          </Provider>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
