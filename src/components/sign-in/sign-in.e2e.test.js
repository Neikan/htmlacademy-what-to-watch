// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import SignIn from "./sign-in.jsx";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e SignIn component`, () => {
  test(`Should 'sign-in'-button for form be pressed`, () => {
    const handleSubmit = jest.fn();

    const signIn = mount(
        <Router history={history}>
          <SignIn
            errorLogin={false}
            errorPassword={false}
            onSubmit={handleSubmit}
          />
        </Router>
    );

    signIn.find(`form`).simulate(`submit`, {
      preventDefault() {}
    });

    expect(handleSubmit.mock.calls.length).toBe(1);
  });
});
