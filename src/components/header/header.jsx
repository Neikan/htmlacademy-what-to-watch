import React from "react";
import Logo from "./../logo/logo.jsx";
import {LogoPosition} from "../../consts/common-data.js";


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
