// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";

// Импорт компонентов
import BtnFullScreen from "./btn-full-screen.jsx";

// Импорт типов, констант, утилит
import {MarkupElement} from "../../../../consts/test-data.js";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e BtnFullScreen component`, () => {
  test(`Should BtnFullScreen be pressed`, () => {
    const handleSet = jest.fn();

    const btnFullScreen = shallow(
        <BtnFullScreen
          onSet={handleSet}
        />
    );

    btnFullScreen.find(`.${MarkupElement.BTN_PLAYER_FULL_SCREEN}`).props().onClick();

    expect(handleSet.mock.calls.length).toBe(1);
  });
});
