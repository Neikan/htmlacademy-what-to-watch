// Импорт библиотек
import React from "react";


/**
 * Создание компонента, обеспечивающего отображение сообщения при ожидании загрузки данных с сервера
 * @return {Object} созданный компонент
 */
const Loader = () => {
  return (
    <section>
      <h2 className="loader">Loading... Please wait</h2>
    </section>
  );
};


export default Loader;
