// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";


/**
 * Создание компонента, обеспечивающего отрисовку дополнительны фильмов списка по требованию
 */
class BtnShowMore extends PureComponent {
  constructor(props) {
    super(props);

    this._handleShowMore = this._handleShowMore.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    return (
      <div className="catalog__more">
        <button className="catalog__button" type="button"
          onClick={this._handleShowMore}
        >
          Show more
        </button>
      </div>
    );
  }


  /**
     * Метод, обспечивающий выполнение помощника для отрисовки дополнительных фильмов
     */
  _handleShowMore() {
    const {onShowMore} = this.props;

    onShowMore();
  }
}


BtnShowMore.propTypes = {
  onShowMore: PropTypes.func.isRequired
};


export default BtnShowMore;
