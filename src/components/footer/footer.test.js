import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";
import {LogoPosition} from "./../../consts/test-data";


describe(`Test Footer component`, () => {
  it(`Footer component is created and rendered correctly`, () => {
    const tree = renderer
      .create(
          <Footer logoPosition = {LogoPosition.HEADER}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
