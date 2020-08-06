// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";

// Импорт компонентов
import TextArea from "./textarea.jsx";

// Импорт типов, констант, утилит
import {MarkupElement, ReviewMessage, ReviewMessageStatus} from "../../../../consts/test-data.js";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e TextArea component`, () => {
  test(`Should TextArea be changed`, () => {
    const handleChange = jest.fn();

    const textarea = mount(
        <TextArea
          isFormBlocked={false}
          messageStatus={ReviewMessageStatus.DEFAULT}
          messageText={ReviewMessage.DEFAULT}
          onChange={handleChange}
        />
    );

    const area = textarea.find(`.${MarkupElement.REVIEW_TEXTAREA}`);

    expect(area.props().value).toEqual(ReviewMessage.DEFAULT);
  });
});
