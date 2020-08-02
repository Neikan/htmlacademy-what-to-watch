// Импорт библиотек
import React, {PureComponent} from "react";


/**
 * Создание компонента, обеспечивающего добавление/удаление фильма из списка избранного
 */
class BtnAddToFavorite extends PureComponent {
  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    return (
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
    );
  }
}


BtnAddToFavorite.propTypes = {
};


export default BtnAddToFavorite;
