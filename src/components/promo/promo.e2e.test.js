// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";
import {Router} from "react-router-dom";
import history from "../../history.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";


// Импорт компонентов
import Promo from "./promo.jsx";

// Импорт типов, констант, утилит
import {MarkupElement, MOVIES, DatumStateAfterStart, DatumUserState} from "./../../consts/test-data";
import NameSpace from "../../store/name-space.js";


configure({
  adapter: new Adapter(),
});


const mockStore = configureStore([]);


describe(`Test e2e Promo component`, () => {
  const store = mockStore({
    [NameSpace.DATUM]: DatumStateAfterStart,
    [NameSpace.DATUM_USER]: DatumUserState
  });


  test(`Should 'add to list'-button for promo-movie be pressed`, () => {
    const handleMovieAddToList = jest.fn();

    const promo = mount(
        <Provider store={store}>
          <Router history={history}>
            <Promo
              movie={MOVIES[0]}
              onChangeMyList={handleMovieAddToList}
              onChangePlaying={() => {}}
              onSelect={() => {}}
            />
          </Router>
        </Provider>
    );

    promo.find(Promo).find(`.${MarkupElement.PROMO_BTN_ADD_TO_LIST}`).props().onClick();

    expect(handleMovieAddToList.mock.calls.length).toBe(1);
  });


  test(`Should poster for promo-movie be pressed`, () => {
    const handleMovieSelect = jest.fn();

    const promo = mount(
        <Provider store={store}>
          <Router history={history}>
            <Promo
              movie={MOVIES[0]}
              onChangeMyList={() => {}}
              onChangePlaying={() => {}}
              onSelect={handleMovieSelect}
            />
          </Router>
        </Provider>
    );

    promo.find(Promo).find(`.${MarkupElement.PROMO_POSTER}`).props().onClick();

    expect(handleMovieSelect.mock.calls.length).toBe(1);
  });


  test(`Should title for promo-movie be pressed`, () => {
    const handleMovieSelect = jest.fn();

    const promo = mount(
        <Provider store={store}>
          <Router history={history}>
            <Promo
              movie={MOVIES[0]}
              onChangeMyList={() => {}}
              onChangePlaying={() => {}}
              onSelect={handleMovieSelect}
            />
          </Router>
        </Provider>
    );

    promo.find(Promo).find(`.${MarkupElement.PROMO_TITLE}`).props().onClick();

    expect(handleMovieSelect.mock.calls.length).toBe(1);
  });
});
