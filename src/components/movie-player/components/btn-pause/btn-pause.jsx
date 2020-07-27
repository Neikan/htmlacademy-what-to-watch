// Импорт библиотек
import React from "react";


/**
 * Создание компонента, обеспечивающего перевод проигрывателя в режим удержания
 * @return {Object} созданный компонент
 */
const BtnPause = () => {
  return (
    <>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </>
  );
};


export default BtnPause;
