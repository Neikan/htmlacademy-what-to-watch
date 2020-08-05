// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import TextArea from "./textarea.jsx";

// Импорт типов, констант, утилит
import {ReviewMessage, ReviewMessageStatus} from "../../../../consts/test-data.js";


describe(`Test TextArea component`, () => {
  test(`Rendered correctly when message is default`, () => {
    const tree = renderer.create(
        <TextArea
          isFormBlocked={false}
          messageStatus={ReviewMessageStatus.DEFAULT}
          messageText={ReviewMessage.DEFAULT}
          onChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Rendered correctly when message less than min length`, () => {
    const tree = renderer.create(
        <TextArea
          isFormBlocked={false}
          messageStatus={ReviewMessageStatus.ERROR_LENGTH_MIN}
          messageText={ReviewMessage.LESS_LENGTH_MIN}
          onChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Rendered correctly when message more than max length`, () => {
    const tree = renderer.create(
        <TextArea
          isFormBlocked={false}
          messageStatus={ReviewMessageStatus.ERROR_LENGTH_MAX}
          messageText={ReviewMessage.MORE_LENGTH_MAX}
          onChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
