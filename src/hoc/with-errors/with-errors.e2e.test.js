// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";

// Импорт компонентов
import withErrors from "./with-errors.js";


configure({
  adapter: new Adapter(),
});


const MockComponent = () => <div />;
const MockComponentWrapped = withErrors(MockComponent);

describe(`Test e2e withErrors component`, () => {
  test(`Should get error for Login and Password when onSubmit call`, () => {
    const handleSubmit = jest.fn();

    const falseLogin = {
      current: {
        value: `joker`
      }
    };

    const trueLogin = {
      current: {
        value: `bat@man.com`
      }
    };

    const falsePassword = {
      current: {
        value: ``
      }
    };

    const truePassword = {
      current: {
        value: `BruceWayne`
      }
    };

    const tree = shallow(
        <MockComponentWrapped
          onSubmit={handleSubmit}
        />
    );

    expect(tree.state().errorLogin).toEqual(false);

    tree.props().onSubmit(falseLogin, falsePassword);
    expect(tree.state().errorLogin).toEqual(true);
    expect(tree.state().errorPassword).toEqual(false);
    expect(handleSubmit.mock.calls.length).toBe(0);

    tree.props().onSubmit(trueLogin, falsePassword);
    expect(tree.state().errorLogin).toEqual(false);
    expect(tree.state().errorPassword).toEqual(true);
    expect(handleSubmit.mock.calls.length).toBe(0);

    tree.props().onSubmit(trueLogin, truePassword);
    expect(tree.state().errorLogin).toEqual(false);
    expect(tree.state().errorPassword).toEqual(false);
    expect(handleSubmit.mock.calls.length).toBe(1);
  });
});
