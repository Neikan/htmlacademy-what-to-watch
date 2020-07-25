import React from "react";
import renderer from "react-test-renderer";
import BtnPlay from "./btn-play";


describe(`Test BtnPlay component`, () => {
  test(`BtnPlay component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BtnPlay />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
