// Импорт типов, констант, утилит
import {ReviewMessage, ReviewMessageStatus, Url} from "../../consts/common-data";

// Импорт редьюсеров, селекторов
import {ActionCreator} from "./datum-review";


const Operation = {
  sendReview: (reviewDatum, movie) => (dispatch, getState, api) => {
    dispatch(ActionCreator.blockForm(true));

    return api.post(`${Url.REVIEWS}/${movie.id}`, {
      rating: reviewDatum.rating,
      comment: reviewDatum.messageText
    })
      .then(() => {
        dispatch(ActionCreator.updateMessageText(ReviewMessage.DEFAULT));
        dispatch(ActionCreator.updateMessageStatus(ReviewMessageStatus.SUCCESS));
        dispatch(ActionCreator.blockForm(false));
      })
      .then(() => {
        dispatch(ActionCreator.updateMessageStatus(ReviewMessageStatus.DEFAULT));
      })
      .catch(() => {
        dispatch(ActionCreator.updateMessageStatus(ReviewMessageStatus.ERROR_SENDING));
        dispatch(ActionCreator.blockForm(false));
      });
  },
};


export {Operation};
