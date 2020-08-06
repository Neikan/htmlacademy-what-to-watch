// Импорт типов, констант, утилит
import {DECIMAL_BASE, ReviewMessageStatus, ReviewMessage, Rating} from "../../consts/common-data";
import {updateState} from "../../utils/reducer";


const initialState = {
  isFormBlocked: false,
  messageText: ReviewMessage.DEFAULT,
  messageStatus: ReviewMessageStatus.DEFAULT,
  rating: Rating.DEFAULT
};


const ActionType = {
  BLOCK_FORM: `block form`,
  CHANGE_RATING: `change rating`,
  UPDATE_MESSAGE_STATUS: `update message status`,
  UPDATE_MESSAGE_TEXT: `update message text`
};


const ActionCreator = {
  blockForm: (isFormBlocked) => ({
    type: ActionType.BLOCK_FORM,
    payload: isFormBlocked
  }),

  changeRating: (rating) => ({
    type: ActionType.CHANGE_RATING,
    payload: parseInt(rating, DECIMAL_BASE)
  }),

  updateMessageStatus: (messageStatus) => ({
    type: ActionType.UPDATE_MESSAGE_STATUS,
    payload: messageStatus
  }),

  updateMessageText: (messageText) => ({
    type: ActionType.UPDATE_MESSAGE_TEXT,
    payload: messageText
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.BLOCK_FORM:
      return updateState(state, {
        isFormBlocked: action.payload
      });

    case ActionType.CHANGE_RATING:
      return updateState(state, {
        rating: action.payload
      });

    case ActionType.UPDATE_MESSAGE_STATUS:
      return updateState(state, {
        messageStatus: action.payload
      });

    case ActionType.UPDATE_MESSAGE_TEXT:
      return updateState(state, {
        messageText: action.payload
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
