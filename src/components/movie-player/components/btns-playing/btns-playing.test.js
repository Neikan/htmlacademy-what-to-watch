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
          onChangePlaying={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`BtnsPlaying component is created and rendered correctly  when isPlaying=false`, () => {
    const tree = renderer.create(
        <BtnsPlaying
          isPlaying={false}
          onChangePlaying={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
