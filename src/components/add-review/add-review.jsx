// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// Импорт компонентов
import Header from "../header/header.jsx";
import InputStar from "./components/input-star/input-star.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";
import TextArea from "./components/textarea/textarea.jsx";

// Импорт типов, констант, утилит
import {userType, movieType} from "../../props/prop-types.js";
import {
  RATING_STARS,
  Rating,
  ReviewMessage,
  ReviewMessageStatus
} from "../../consts/common-data.js";

// Импорт редьюсеров, селекторов
import {ActionCreator} from "../../store/datum-review/datum-review.js";
import {getAuthStatus, getUserDatum} from "../../store/datum-user/selectors.js";
import {
  getIsFormBlocked,
  getMessageStatus,
  getMessageText,
  getRating
} from "../../store/datum-review/selectors.js";
import {Operation as OperationDatumReview} from "../../store/datum-review/operations.js";


/**
 * Создание компонента, обеспечивающего отображение страницы добавления отзыва
 * @return {Object} созданный компонент
 */
class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMessageStatusUpdate = this._handleMessageStatusUpdate.bind(this);
    this._handleRatingChange = this._handleRatingChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {
      authStatus,
      user,
      movie,
      isFormBlocked,
      messageStatus,
      messageText,
      rating
    } = this.props;

    const {backgroundColor, backgroundImage, poster, title} = movie;

    return (
      <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>
        <div className="movie-card__header">
          <MovieBackground
            backgroundImage={backgroundImage}
            title={title}
          />

          <h1 className="visually-hidden">WTW</h1>

          <Header
            authStatus={authStatus}
            movie={movie}
            user={user}
          />

          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form"
            onSubmit={this._handleSubmit}
          >
            <div className="rating">
              <div className="rating__stars">
                {RATING_STARS.map((star) =>
                  <InputStar
                    key={star}
                    checked={star === rating}
                    countStar={star}
                    onChange={this._handleRatingChange}
                  />
                )}
              </div>
            </div>

            <TextArea
              isFormBlocked={isFormBlocked}
              messageStatus={messageStatus}
              messageText={messageText}
              onChange={this._handleMessageStatusUpdate}
            />
          </form>
        </div>
      </section>
    );
  }


  /**
   * Метод, обеспечивающий обновление рейтинга на основе выбранных "звезд"
   * @param {Number} value выбранные "звезды"
   */
  _handleRatingChange(value) {
    const {onRatingChange} = this.props;

    onRatingChange(value);
  }


  /**
   * Метод, обеспечивающий обновление состояния формы
   * на основе введенного текста отзыва
   * @param {Object} messageText введенный текст отзыва
   * @return {string} сообщение-статус по результатам проверки
   * введенного текста сообщения
   */
  _handleMessageStatusUpdate(messageText) {
    const {onMessageTextUpdate, onMessageStatusUpdate} = this.props;

    if (messageText.length < ReviewMessage.LENGTH_MIN) {
      onMessageTextUpdate(messageText);
      return onMessageStatusUpdate(ReviewMessageStatus.ERROR_LENGTH_MIN);
    }

    if (messageText.length > ReviewMessage.LENGTH_MAX) {
      onMessageTextUpdate(messageText);
      return onMessageStatusUpdate(ReviewMessageStatus.ERROR_LENGTH_MAX);
    }

    onMessageTextUpdate(messageText);

    return onMessageStatusUpdate(ReviewMessageStatus.DEFAULT);
  }


  /**
   * Метод, обеспечивающий отправку формы
   * @param {Object} evt событие
   */
  _handleSubmit(evt) {
    const {messageText, onReviewSend, movie} = this.props;

    evt.preventDefault();

    onReviewSend({
      messageText,
      rating: this.props.rating * Rating.WEIGHT,
    },
    movie);
  }
}


AddReview.propTypes = {
  authStatus: PropTypes.string.isRequired,
  user: userType.isRequired,

  movie: movieType.isRequired,

  isFormBlocked: PropTypes.bool.isRequired,
  messageStatus: PropTypes.string.isRequired,
  messageText: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,

  onMessageStatusUpdate: PropTypes.func.isRequired,
  onMessageTextUpdate: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onReviewSend: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  user: getUserDatum(state),

  isFormBlocked: getIsFormBlocked(state),
  messageStatus: getMessageStatus(state),
  messageText: getMessageText(state),
  rating: getRating(state)
});


const mapDispatchToProps = (dispatch) => {
  return {
    onMessageStatusUpdate: (text) => {
      dispatch(ActionCreator.updateMessageStatus(text));
    },

    onMessageTextUpdate: (text) => {
      dispatch(ActionCreator.updateMessageText(text));
    },

    onRatingChange: (rating) => {
      dispatch(ActionCreator.changeRating(rating));
    },

    onReviewSend(reviewDatum, movie) {
      dispatch(OperationDatumReview.sendReview(reviewDatum, movie));
    }
  };
};


export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
