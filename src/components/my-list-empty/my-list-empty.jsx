// Импорт библиотек
import React from "react";


/**
 * Создание компонента, обеспечивающего отображение пустого списка избранных фильмов
 * @return {Object} созданный компонент
 */
const MyListEmpty = () => {
  return (
    <>
      <p>Your favorites list is empty...</p>
      <p>Please add your first movie!</p>
    </>
  );
};


export default MyListEmpty;
