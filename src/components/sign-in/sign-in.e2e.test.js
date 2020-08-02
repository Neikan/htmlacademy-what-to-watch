// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";
import {BrowserRouter} from "react-router-dom";

// Импорт компонентов
import SignIn from "./sign-in.jsx";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e SignIn component`, () => {
  test(`Should 'sign-in'-button for form be pressed`, () => {
    const handleSubmit = jest.fn();

    const signIn = mount(
        <BrowserRouter>
          <SignIn
            errorLogin={false}
            errorPassword={false}
            onSubmit={handleSubmit}
          />
        </BrowserRouter>
    );

    signIn.find(`form`).simulate(`submit`, {
      preventDefault() {}
    });

    expect(handleSubmit.mock.calls.length).toBe(1);
  });
});
