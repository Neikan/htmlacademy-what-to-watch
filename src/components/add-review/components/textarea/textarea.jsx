// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// Импорт типов, констант, утилит
import {ReviewMessage, REVIEW_PLACEHOLDER} from "../../../../consts/common-data";


/**
 * Создание компонента, обеспечивающего отображение поля ввода текста отзыва
 * @return {Object} созданный компонент
 */
class TextArea extends PureComponent {
  constructor(props) {
    super(props);

    this._handleTextChange = this._handleTextChange.bind(this);
  }


  /**
   * Метод, обеспечивающий отображение компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {isFormBlocked, messageText, messageStatus} = this.props;

    const isDisabledBtnPost = isFormBlocked
      || messageText.length < ReviewMessage.LENGTH_MIN
      || messageText.length > ReviewMessage.LENGTH_MAX;

    return (
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text"
          id="review-text" placeholder={REVIEW_PLACEHOLDER}
          value={messageText} onChange={this._handleTextChange}
        />
        <div className="add-review__submit">
          <div style={{margin: `0 auto`}}>{messageStatus}</div>
          <button className="add-review__btn" type="submit"
            disabled={isDisabledBtnPost}
          >
            Post
          </button>
        </div>
      </div>
    );
  }


  /**
   * Метод, обеспечивающий обновление состояния формы
   * на основе введенного текста отзыва
   * @param {Object} evt событие
   */
  _handleTextChange(evt) {
    const {onChange} = this.props;

    onChange(evt.target.value);
  }
}


TextArea.propTypes = {
  isFormBlocked: PropTypes.bool.isRequired,
  messageStatus: PropTypes.string.isRequired,
  messageText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};


export default TextArea;
