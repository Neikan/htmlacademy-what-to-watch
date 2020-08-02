// Импорт библиотек
import React from "react";

// Импорт компонентов
import Logo from "./../logo/logo.jsx";

// Импорт типов, констант, утилит
import {LogoPosition} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего отображение "подвала" приложения
 * @return {Object} созданный компонент
 */
const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo logoPosition={LogoPosition.FOOTER} />

      <div className="copyright">
        <p>© 2020 What to watch Ltd.</p>
      </div>
    </footer>
  );
};


export default Footer;
