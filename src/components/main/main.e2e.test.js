// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import Main from "./main.jsx";

// Импорт типов, констант, утилит
import {MarkupElement, MOVIES, GENRES, DatumStateAfterStart, DatumUserState} from "./../../consts/test-data";
import NameSpace from "../../store/name-space.js";


configure({
  adapter: new Adapter(),
});


const mockStore = configureStore([]);


describe(`Test e2e Main component`, () => {
  const store = mockStore({
    [NameSpace.DATUM]: DatumStateAfterStart,
    [NameSpace.DATUM_USER]: DatumUserState
  });


  test(`Should 'add to list'-button for promo-movie be pressed`, () => {
    const handleMovieChangeMyList = jest.fn();

    const main = mount(
        <Provider store={store}>
          <Router history={history}>
            <Main
              promoMovie={MOVIES[0]}
              movies={MOVIES}
              genres={GENRES}
              countShowedMovies={1}
              onMovieChangeMyList={handleMovieChangeMyList}
              onMovieChangePlaying={() => {}}
              onMovieSelect={() => {}}
              onGenreSelect={() => {}}
              onShowMore={() => {}}
            />
          </Router>
        </Provider>
    );

    main.find(Main).find(`.${MarkupElement.PROMO_BTN_ADD_TO_LIST}`).props().onClick();

    expect(handleMovieChangeMyList.mock.calls.length).toBe(1);
  });


  test(`Should all titles of movies be pressed`, () => {
    const handleMovieSelect = jest.fn();
    const countShowedMovies = 1;

    const main = mount(
        <Provider store={store}>
          <Router history={history}>
            <Main
              promoMovie={MOVIES[0]}
              movies={MOVIES}
              genres={GENRES}
              countShowedMovies={countShowedMovies}
              onMovieChangeMyList={() => {}}
              onMovieChangePlaying={() => {}}
              onMovieSelect={handleMovieSelect}
              onGenreSelect={() => {}}
              onShowMore={() => {}}
            />
          </Router>
        </Provider>
    );

    main.find(Main).find(`.${MarkupElement.MOVIE_CARD_TITLE}`).map((movie) => movie.props().onClick());
    main.find(Main).find(`.${MarkupElement.MOVIE_CARD}`).map((movie) => movie.props().onClick());

    expect(handleMovieSelect.mock.calls.length).toBe(countShowedMovies * 2);
  });


  test(`Should all titles of genres be pressed`, () => {
    const handleGenreSelect = jest.fn();

    const main = mount(
        <Provider store={store}>
          <Router history={history}>
            <Main
              promoMovie={MOVIES[0]}
              movies={MOVIES}
              genres={GENRES}
              countShowedMovies={1}
              onMovieChangeMyList={() => {}}
              onMovieChangePlaying={() => {}}
              onMovieSelect={() => {}}
              onGenreSelect={handleGenreSelect}
              onShowMore={() => {}}
            />
          </Router>
        </Provider>
    );

    main.find(Main).find(`.${MarkupElement.GENRE_LINK}`).map((genre) => genre.simulate(`click`, {
      preventDefault() {}
    }));

    expect(handleGenreSelect.mock.calls.length).toBe(9);
  });


  test(`Should BtnShowMore be pressed`, () => {
    const handleShowMore = jest.fn();

    const main = mount(
        <Provider store={store}>
          <Router history={history}>
            <Main
              promoMovie={MOVIES[0]}
              movies={MOVIES}
              genres={GENRES}
              countShowedMovies={1}
              onMovieChangeMyList={() => {}}
              onMovieChangePlaying={() => {}}
              onMovieSelect={() => {}}
              onGenreSelect={() => {}}
              onShowMore={handleShowMore}
            />
          </Router>
        </Provider>
    );

    main.find(Main).find(`.${MarkupElement.BTN_SHOW_MORE}`).simulate(`click`);

    expect(handleShowMore.mock.calls.length).toBe(1);
  });
});
