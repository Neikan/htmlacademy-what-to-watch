// Импорт библиотек
import React from "react";
import {Link} from "react-router-dom";

// Импорт типов, констант, утилит
import {Page} from "../../consts/common-data";


/**
 * Создание компонента, обеспечивающего отображение ссылки на страницу авторизации
 * @return {Object} созданный компонент
 */
const LinkSignIn = () => {
  return (
    <Link
      to={`/${Page.LOGIN}`}
      className="user-block__link"
    >
      Sign in
    </Link>
  );
};


export default LinkSignIn;
