// Импорт типов, констант, утилит
import {AuthStatus} from "../../consts/common-data";
import {updateState} from "../../utils/reducer";


const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  user: {
    id: ``,
    email: ``,
    name: ``,
    avatarUrl: ``
  }
};


const ActionType = {
  REQUIRE_AUTH: `requare auth`,
  SET_USER_DATUM: `set user datum`
};


const ActionCreator = {
  requireAuth: (status) => {
    return {
      type: ActionType.REQUIRE_AUTH,
      payload: status,
    };
  },

  setUserDatum: (userDatum) => {
    return {
      type: ActionType.SET_USER_DATUM,
      payload: userDatum
    };
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTH:
      return updateState(state, {
        authStatus: action.payload
      });

    case ActionType.SET_USER_DATUM:
      return updateState(state, {
        user: action.payload
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
