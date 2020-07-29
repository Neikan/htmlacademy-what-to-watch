// Импорт библиотек
import React from 'react';
import renderer from "react-test-renderer";

// Импорт компонентов
import SignIn from "./sign-in.jsx";

describe(`Test SignIn component`, () => {
  test(`SignIn component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <SignIn
          errorLogin={false}
          errorPassword={false}
          onSubmit={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
