// Импорт типов, констант, утилит
import {RequestStatusCode, Url, ReviewMessageStatus, ReviewMessage} from "../../consts/common-data";

// Импорт редьюсеров, селекторов
import {ActionCreator} from "./datum-review";


const Operation = {
  sendReview: (reviewDatum, movie) => (dispatch, getState, api) => {
    dispatch(ActionCreator.blockForm(true));

    return api.post(`${Url.COMMENTS}/${movie.id}`, {
      rating: reviewDatum.rating,
      comment: reviewDatum.messageText
    })
      .then((response) => {
        if (response.status === RequestStatusCode.OK) {
          dispatch(ActionCreator.updateMessageText(ReviewMessage.DEFAULT));
          dispatch(ActionCreator.updateMessageStatus(ReviewMessageStatus.SUCCESS));
        } else {
          dispatch(ActionCreator.updateMessageStatus(ReviewMessageStatus.ERROR_SENDING));
        }

        dispatch(ActionCreator.blockForm(false));
      })
      .catch(() => {
        dispatch(ActionCreator.updateMessageStatus(ReviewMessageStatus.ERROR_SENDING));
        dispatch(ActionCreator.blockForm(false));
      });
  },
};


export {Operation};
