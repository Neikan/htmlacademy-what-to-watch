import React from "react";
import PropTypes from "prop-types";
import {LogoPosition} from "../../consts/common-data";


const MarkupClass = {
  HEADER: `logo__link`,
  FOOTER: `logo__link logo__link--light`
};


const Logo = (props) => {
  const {logoPosition} = props;

  const className = logoPosition === LogoPosition.HEADER ? MarkupClass.HEADER : MarkupClass.FOOTER;

  return (
    <div className="logo">
      <a className={className}>
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
