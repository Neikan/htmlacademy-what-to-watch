// Импорт библиотек
import React from 'react';
import renderer from "react-test-renderer";

// Импорт компонентов
import MoviePlayer from './movie-player.jsx';

// Импорт типов, констант, утилит
import {MOVIES, Time} from "../../consts/test-data.js";


const children = <div className="children-component" />;


describe(`Test MoviePlayer component`, () => {
  test(`MoviePlayer component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MoviePlayer
          movie={MOVIES[0]}
          time={Time}
          isPlaying={true}
          onClose={() => {}}
          onPlayingChange={() => {}}
          onSetFullScreen={() => {}}
        >
          {children}
        </MoviePlayer>
        , {
          createNodeMock: () => {
            return {};
          }}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
