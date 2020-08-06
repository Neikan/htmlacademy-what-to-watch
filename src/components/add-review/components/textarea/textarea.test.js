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
    const text = ReviewMessage.LESS_LENGTH_MIN;

    const tree = renderer.create(
        <TextArea
          isFormBlocked={false}
          messageStatus={`${ReviewMessageStatus.MESSAGE_LENGTH} ${text.length}`}
          messageText={text}
          onChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Rendered correctly when message more than max length`, () => {
    const text = ReviewMessage.MORE_LENGTH_MAX;

    const tree = renderer.create(
        <TextArea
          isFormBlocked={false}
          messageStatus={`${ReviewMessageStatus.MESSAGE_LENGTH} ${text.length}`}
          messageText={text}
          onChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
