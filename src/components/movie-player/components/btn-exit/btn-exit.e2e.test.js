// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";

// Импорт компонентов
import BtnExit from "./btn-exit.jsx";

// Импорт типов, констант, утилит
import {MarkupElement} from "../../../../consts/test-data.js";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e BtnExit component`, () => {
  test(`Should BtnExit be pressed`, () => {
    const handleClose = jest.fn();

    const btnExit = shallow(
        <BtnExit
          onClose={handleClose}
        />
    );

    btnExit.find(`.${MarkupElement.BTN_PLAYER_EXIT}`).props().onClick();

    expect(handleClose.mock.calls.length).toBe(1);
  });
});
