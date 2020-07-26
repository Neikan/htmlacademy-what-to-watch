// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";

// Импорт хоков
import withSelectedMovie from "./with-selected-movie.js";


configure({
  adapter: new Adapter()
});


const MockComponent = () => <div />;
const MockComponentWrapped = withSelectedMovie(MockComponent);


jest.useFakeTimers();


describe(`Test e2e withSelectedMovie component`, () => {
  test(`Should change selected movie`, () => {
    const tree = shallow(
        <MockComponentWrapped
          selectedMovieId={null}
          onMovieMouseEnter={() => {}}
          onMovieMouseLeave={() => {}}
        />
    );

    expect(tree.props().selectedMovieId).toEqual(null);

    tree.props().onMovieMouseEnter(MOVIES[1]);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);

    tree.props().onMovieMouseLeave();
    expect(tree.props().selectedMovieId).toEqual(null);

  });
});
