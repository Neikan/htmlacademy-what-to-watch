// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import Header from "./header.jsx";

// Импорт типов, констант, утилит
import {LogoPosition, AuthStatus} from "./../../consts/test-data";
import NameSpace from "../../store/name-space.js";


const mockStore = configureStore([]);


describe(`Test Header component`, () => {
  test(`Header component is created and rendered correctly when authStatus === NO_AUTH`, () => {
    const store = mockStore({
      [NameSpace.DATUM_USER]: {
        authStatus: AuthStatus.NO_AUTH,
        user: {
          id: ``,
          email: ``,
          name: ``,
          avatarUrl: ``
        },
      }
    });

    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <Header
              logoPosition={LogoPosition.HEADER}
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


  test(`Header component is created and rendered correctly when authStatus === AUTH`, () => {
    const store = mockStore({
      [NameSpace.DATUM_USER]: {
        authStatus: AuthStatus.AUTH,
        user: {
          id: `user-1`,
          email: `sladkov.e.m@outlook.com`,
          name: `Batman`,
          avatarUrl: `https://4.react.pages.academy/wtw/static/avatar/5.jpg`
        },
      }
    });

    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <Header
              logoPosition={LogoPosition.HEADER}
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
