// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

// Импорт компонентов
import MovieCard from "./movie-card.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "./../../consts/test-data";


describe(`Test MovieCard component`, () => {
  test(`Render correctly when isPlaying is true`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MovieCard
            movie={MOVIES[0]}
            isPlaying={true}
            onSelect={() => {}}
            onPlay={() => {}}
            onStop={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Render correctly when isPlaying is false`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MovieCard
            movie={MOVIES[0]}
            isPlaying={false}
            onSelect={() => {}}
            onPlay={() => {}}
            onStop={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
