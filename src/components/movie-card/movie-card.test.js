// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import MovieCard from "./movie-card.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "./../../consts/test-data";


describe(`Test MovieCard component`, () => {
  test(`Render correctly when isPlaying is true`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <MovieCard
            movie={MOVIES[0]}
            isPlaying={true}
            onSelect={() => {}}
            onPlay={() => {}}
            onStop={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Render correctly when isPlaying is false`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <MovieCard
            movie={MOVIES[0]}
            isPlaying={false}
            onSelect={() => {}}
            onPlay={() => {}}
            onStop={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
