// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

// Импорт компонентов
import AddReview from "./add-review.jsx";

// Импорт типов, констант, утилит
import {MOVIES, UserDatumState, ReviewDatumState} from "./../../consts/test-data";
import NameSpace from "../../store/name-space.js";


const mockStore = configureStore([]);

describe(`Test AddReview component`, () => {
  test(`AddReview component is created and rendered correctly`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: {
        selectedMovie: MOVIES[0],
      },

      [NameSpace.DATUM_USER]: UserDatumState,

      [NameSpace.DATUM_REVIEW]: ReviewDatumState
    });

    const tree = renderer.create(
        <Provider store={store}>
          <AddReview />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
