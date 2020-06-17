import React from "react";
import PropTypes from "prop-types";
import Logo from "./../logo/logo.jsx";


const Header = (props) => {
  const {logoPosition} = props;

  return (
    <header className="page-header movie-card__head">
      <Logo logoPosition = {logoPosition}/>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </header>
  );
};


Header.propTypes = {
  logoPosition: PropTypes.string.isRequired
};


export default Header;
