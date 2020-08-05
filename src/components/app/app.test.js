// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

// Импорт компонентов
import {App} from "./app.jsx";

// Импорт типов, констант, утилит
import {
  AuthStatus,
  CountMovies,
  DatumStateAfterStart,
  GENRES,
  MOVIES,
  DatumUserState,
  DatumReviewState,
} from "./../../consts/test-data";
import NameSpace from "../../store/name-space.js";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock(`react-router-dom`);


describe(`Test App component`, () => {
  test(`App component is created and rendered correctly when page is Main`, () => {
    const store = mockStore({
      [NameSpace.DATUM]: DatumStateAfterStart,
      [NameSpace.DATUM_REVIEW]: DatumReviewState,
      [NameSpace.DATUM_USER]: DatumUserState
    });

    store.dispatch = jest.fn();

    const tree = renderer.create(
        <Provider store={store}>
          <App
            authStatus={AuthStatus.AUTH}
            countShowedMovies={CountMovies.START}
            genres={GENRES}

            isLoadingMovies={false}
            isLoadingPromo={false}
            isPlayingMovie={false}

            likedMovies={MOVIES}
            movies={MOVIES}

            onFavoriteMovieSend={() => {}}
            onGenreSelect={() => {}}
            onLikedMoviesSet={() => {}}
            onMovieChangePlaying={() => {}}
            onShowMore={() => {}}
            onStart={() => {}}
            onUserDatumSubmit={() => {}}

            promoMovie={MOVIES[0]}
            selectedGenre={GENRES[0]}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
