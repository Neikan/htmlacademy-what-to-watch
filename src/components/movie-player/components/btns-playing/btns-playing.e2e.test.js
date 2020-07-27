// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";

// Импорт компонентов
import BtnsPlaying from "./btns-playing.jsx";

// Импорт типов, констант, утилит
import {MarkupElement} from "../../../../consts/test-data.js";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e BtnsPlaying component`, () => {
  test(`Should BtnsPlaying be pressed`, () => {
    const handleChangePlaying = jest.fn();

    const btnsPlaying = shallow(
        <BtnsPlaying
          isPlaying={true}
          onChangePlaying={handleChangePlaying}
        />
    );

    btnsPlaying.find(`.${MarkupElement.BTN_PLAYER_PLAY}`).props().onClick();

    expect(handleChangePlaying.mock.calls.length).toBe(1);
  });
});
