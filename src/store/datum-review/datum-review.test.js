// Импорт типов, констант, утилит
import {ReviewMessage, ReviewMessageStatus, Rating} from "../../consts/test-data.js";

// Импорт редьюсеров, селекторов
import {ActionType, reducer, ActionCreator} from "./datum-review.js";


describe(`Get initial state`, () => {
  test(`Return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      isFormBlocked: false,
      messageText: ReviewMessage.DEFAULT,
      messageStatus: ReviewMessageStatus.DEFAULT,
      rating: Rating.DEFAULT
    });
  });
});


describe(`Action types work correctly`, () => {
  test(`Return isBlockForm === true`, () => {
    expect(reducer({
      isFormBlocked: false
    }, {
      type: ActionType.BLOCK_FORM,
      payload: true
    })).toEqual({
      isFormBlocked: true
    });
  });


  test(`Return rating === 5`, () => {
    expect(reducer({
      rating: Rating.DEFAULT
    }, {
      type: ActionType.CHANGE_RATING,
      payload: 5
    })).toEqual({
      rating: 5
    });
  });


  test(`Return messageStatus === error`, () => {
    expect(reducer({
      messageStatus: ReviewMessageStatus.DEFAULT
    }, {
      type: ActionType.UPDATE_MESSAGE_STATUS,
      payload: ReviewMessageStatus.ERROR_SENDING
    })).toEqual({
      messageStatus: ReviewMessageStatus.ERROR_SENDING
    });
  });


  test(`Return messageText === good value`, () => {
    expect(reducer({
      messageText: ReviewMessage.DEFAULT
    }, {
      type: ActionType.UPDATE_MESSAGE_TEXT,
      payload: ReviewMessage.GOOD
    })).toEqual({
      messageText: ReviewMessage.GOOD
    });
  });
});


describe(`Action creators work correctly`, () => {
  test(`BlockForm returns correct action`, () => {
    expect(ActionCreator.blockForm(false)).toEqual({
      type: ActionType.BLOCK_FORM,
      payload: false
    });
  });


  test(`ChangeRating returns correct action`, () => {
    expect(ActionCreator.changeRating(Rating.DEFAULT)).toEqual({
      type: ActionType.CHANGE_RATING,
      payload: Rating.DEFAULT
    });
  });


  test(`UpdateMessageStatus returns correct action`, () => {
    expect(ActionCreator.updateMessageStatus(ReviewMessageStatus.SUCCESS)).toEqual({
      type: ActionType.UPDATE_MESSAGE_STATUS,
      payload: ReviewMessageStatus.SUCCESS
    });
  });


  test(`UpdateMessageText returns correct action`, () => {
    expect(ActionCreator.updateMessageText(ReviewMessage.LESS_LENGTH_MIN)).toEqual({
      type: ActionType.UPDATE_MESSAGE_TEXT,
      payload: ReviewMessage.LESS_LENGTH_MIN
    });
  });
});
