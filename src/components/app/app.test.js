// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

// Импорт компонентов
import App from "./app.jsx";

// Импорт типов, констант, утилит
import {DatumUserState, DatumStateAfterStart} from "./../../consts/test-data";
import NameSpace from "../../store/name-space.js";


const mockStore = configureStore([]);


describe(`Test App component`, () => {
  test(`App component is created and rendered correctly when page is Main`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_USER]: DatumUserState
    });


    const tree = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`App component is created and rendered correctly when page is Movie`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_USER]: DatumUserState
    });


    const tree = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`App component is created and rendered correctly when select Genre`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_USER]: DatumUserState
    });


    const tree = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`App component is created and rendered correctly when promoMovie === null`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_USER]: DatumUserState
    });


    const tree = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`App component is created and rendered correctly when authStatus === NO_AUTH`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_USER]: DatumUserState
    });


    const tree = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
