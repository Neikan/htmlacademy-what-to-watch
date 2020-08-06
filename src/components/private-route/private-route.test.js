// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";

// Импорт компонентов
import Loader from "../loader/loader.jsx";
import PrivateRoute from "./private-route.jsx";

// Импорт типов, констант, утилит
import {Page, AuthStatus, DatumUserState, DatumStateAfterStart} from "../../consts/test-data.js";
import NameSpace from "../../store/name-space.js";


const MockComponent = () => <div />;
const mockStore = configureStore([]);

describe(`Test PrivateRoute component`, () => {
  test(`Should render Loader`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_USER]: DatumUserState
    });


    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[Page.MY_LIST]}>
            <PrivateRoute
              exact
              path={`/${Page.MY_LIST}`}
              render={() => <Loader />}
              authStatus={AuthStatus.AUTH}
              isLoadingMovies={true}
              isLoadingPromo={false}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Should render MockComponent`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_USER]: DatumUserState
    });


    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[Page.MY_LIST]}>
            <PrivateRoute
              exact
              path={`/${Page.MY_LIST}`}
              render={() => <MockComponent />}
              authStatus={AuthStatus.AUTH}
              isLoadingMovies={false}
              isLoadingPromo={false}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
