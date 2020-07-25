// Импорт библиотек
import React from "react";

// Импорт компонентов
import Logo from "./../logo/logo.jsx";

// Импорт типов, констант, утилит
import {LogoPosition} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего отображение "шапки" приложения
 * @return {Object} созданный компонент
 */
const Header = () => {
  return (
    <header className="page-header movie-card__head">
      <Logo logoPosition={LogoPosition.HEADER} />

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </header>
  );
};


export default Header;
