// Импорт библиотек
import React from 'react';
import renderer from "react-test-renderer";

// Импорт компонентов
import SignIn from "./sign-in.jsx";

describe(`Test SignIn component`, () => {
  test(`SignIn component is created and rendered correctly when no errors`, () => {
    const tree = renderer.create(
        <SignIn
          errorLogin={false}
          errorPassword={false}
          onSubmit={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`SignIn component is created and rendered correctly when errorLogin === true`, () => {
    const tree = renderer.create(
        <SignIn
          errorLogin={true}
          errorPassword={false}
          onSubmit={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`SignIn component is created and rendered correctly when errorPassword === true`, () => {
    const tree = renderer.create(
        <SignIn
          errorLogin={false}
          errorPassword={true}
          onSubmit={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
