import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo.jsx";
import {LogoPosition} from "./../../consts/test-data";


describe(`Test Logo component`, () => {
  test(`Logo component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Logo
          logoPosition={LogoPosition.HEADER}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
