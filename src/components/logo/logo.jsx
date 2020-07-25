// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';

// Импорт типов, констант, утилит
import {LogoPosition, Page} from "../../consts/common-data";


/**
 * Создание компонента, обеспечивающего отображение логотипа приложения
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const Logo = (props) => {
  const {logoPosition} = props;

  const className = cn(`logo__link`, {
    'logo__link--light': logoPosition === LogoPosition.FOOTER
  });

  return (
    <div className="logo">
      <a className={className} href={Page.MAIN}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};


Logo.propTypes = {
  logoPosition: PropTypes.string.isRequired
};


export default Logo;
