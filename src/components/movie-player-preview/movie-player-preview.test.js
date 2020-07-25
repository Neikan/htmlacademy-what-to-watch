// Импорт библиотек
import React from 'react';
import renderer from "react-test-renderer";

// Импорт компонентов
import MoviePlayerPreview from './movie-player-preview.jsx';

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviePlayerPreview component`, () => {
  test(`MoviePlayerPreview component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MoviePlayerPreview muted
          isPlaying={false}
          src={MOVIES[0].preview}
          cover={MOVIES[0].cover}
        />, {
          createNodeMock: () => {
            return {};
          }}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
