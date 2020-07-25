// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import Main from "./main.jsx";

// Импорт типов, констант, утилит
import {MOVIES, GENRES} from "./../../consts/test-data";


describe(`Test Main component`, () => {
  test(`Main component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Main
          promoMovie={MOVIES[0]}
          movies={MOVIES}
          genres={GENRES}
          countShowedMovies={1}
          onMovieChangePlaying={() => {}}
          onMovieAddToList={() => {}}
          onMovieSelect={() => {}}
          onGenreSelect={() => {}}
          onShowMore={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
