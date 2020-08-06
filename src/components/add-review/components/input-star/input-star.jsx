// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";


/**
 * Создание компонента, обеспечивающего отображение пользователькой
 * оценки фильма в виде "звезды"
 * @return {Object} созданный компонент
 */
class InputStar extends PureComponent {
  constructor(props) {
    super(props);

    this._handleRatingChange = this._handleRatingChange.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {countStar, checked} = this.props;

    return (
      <>
        <input className="rating__input" id={`star-${countStar}`}
          type="radio" name="rating" checked={checked}
          value={countStar} onChange={this._handleRatingChange}
        />
        <label className="rating__label" htmlFor={`star-${countStar}`}>
          {`Rating ${countStar}`}
        </label>
      </>
    );
  }


  /**
   * Метод, выполняющий обновление рейтинга на основе выбранных "звезд"
   */
  _handleRatingChange() {
    const {countStar, onChange} = this.props;

    onChange(countStar);
  }
}


InputStar.propTypes = {
  checked: PropTypes.bool.isRequired,
  countStar: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};


export default InputStar;
