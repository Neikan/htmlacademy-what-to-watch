import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo.jsx";
import {LogoPosition} from "./../../consts/test-data";


describe(`Test Logo component`, () => {
  test(`Logo component is created and rendered correctly for Header`, () => {
    const tree = renderer
      .create(
          <Logo logoPosition = {LogoPosition.HEADER}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Logo component is created and rendered correctly for Footer`, () => {
    const tree = renderer
      .create(
          <Logo logoPosition = {LogoPosition.FOOTER}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
