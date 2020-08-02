// Импорт типов, констант, утилит
import {AuthStatus, UserDatumState} from '../../consts/test-data.js';

// Импорт редьюсеров, селекторов
import {ActionType, reducer, ActionCreator} from "./datum-user.js";


describe(`Get initial state`, () => {
  test(`Return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authStatus: AuthStatus.NO_AUTH,
      user: {
        id: ``,
        email: ``,
        name: ``,
        avatarUrl: ``
      }
    });
  });
});


describe(`Action types work correctly`, () => {
  test(`Return authStatus === AUTH`, () => {
    expect(reducer({
      authStatus: AuthStatus.NO_AUTH
    }, {
      type: ActionType.REQUIRE_AUTH,
      payload: AuthStatus.AUTH
    })).toEqual({
      authStatus: AuthStatus.AUTH
    });
  });


  test(`Return authStatus === NO_AUTH`, () => {
    expect(reducer({
      authStatus: AuthStatus.AUTH
    }, {
      type: ActionType.REQUIRE_AUTH,
      payload: AuthStatus.NO_AUTH
    })).toEqual({
      authStatus: AuthStatus.NO_AUTH
    });
  });


  test(`Return authStatus === AUTH`, () => {
    expect(reducer({
      authStatus: AuthStatus.AUTH
    }, {
      type: ActionType.REQUIRE_AUTH,
      payload: AuthStatus.AUTH
    })).toEqual({
      authStatus: AuthStatus.AUTH
    });
  });


  test(`Return authStatus === NO_AUTH`, () => {
    expect(reducer({
      authStatus: AuthStatus.NO_AUTH
    }, {
      type: ActionType.REQUIRE_AUTH,
      payload: AuthStatus.NO_AUTH
    })).toEqual({
      authStatus: AuthStatus.NO_AUTH
    });
  });


  test(`Return user datum`, () => {
    expect(reducer({
      user: {
        id: ``,
        email: ``,
        name: ``,
        avatarUrl: ``
      }
    }, {
      type: ActionType.SET_USER_DATUM,
      payload: UserDatumState.user
    })).toEqual({
      user: {
        id: `user-1`,
        email: `sladkov.e.m@outlook.com`,
        name: `Batman`,
        avatarUrl: `https://4.react.pages.academy/wtw/static/avatar/5.jpg`
      }
    });
  });
});


describe(`Action creators work correctly`, () => {
  test(`Require auth returns correct action when AuthStatus === NO_AUTH`, () => {
    expect(ActionCreator.requireAuth(AuthStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTH,
      payload: AuthStatus.NO_AUTH
    });
  });


  test(`Require auth returns correct action when AuthStatus === AUTH`, () => {
    expect(ActionCreator.requireAuth(AuthStatus.AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTH,
      payload: AuthStatus.AUTH
    });
  });


  test(`Require auth returns correct action when AuthStatus === AUTH`, () => {
    expect(ActionCreator.setUserDatum(UserDatumState.user)).toEqual({
      type: ActionType.SET_USER_DATUM,
      payload: UserDatumState.user
    });
  });


  test(`Require auth returns correct action when AuthStatus === AUTH`, () => {
    expect(ActionCreator.setUserDatum(UserDatumState.user)).toEqual({
      type: ActionType.SET_USER_DATUM,
      payload: UserDatumState.user
    });
  });
});
