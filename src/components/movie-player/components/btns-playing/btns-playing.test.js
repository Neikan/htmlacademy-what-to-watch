// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import BtnsPlaying from "./btns-playing.jsx";


describe(`Test BtnsPlaying component`, () => {
  test(`BtnsPlaying component is created and rendered correctly when isPlaying=true`, () => {
    const tree = renderer.create(
        <BtnsPlaying
          isPlaying={true}
          onPlayingChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`BtnsPlaying component is created and rendered correctly  when isPlaying=false`, () => {
    const tree = renderer.create(
        <BtnsPlaying
          isPlaying={false}
          onPlayingChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
