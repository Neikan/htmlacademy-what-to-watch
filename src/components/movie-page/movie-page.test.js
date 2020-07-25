// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MoviePage from "./movie-page.jsx";

// Импорт типов, констант, утилит
import {MOVIES, MovieTabList} from "../../consts/test-data.js";


describe(`Test MoviePage component`, () => {
  test(`MoviePage component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MoviePage
          movie={MOVIES[0]}
          movies={MOVIES}
          countShowedMovies={4}
          onMovieSelect={() => {}}
          onMovieChangePlaying={() => {}}
          selectedTab={MovieTabList.OVERVIEW}
          onTabSelect={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
