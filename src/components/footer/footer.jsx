import React from "react";
import PropTypes from "prop-types";
import Logo from "./../logo/logo.jsx";


const Footer = (props) => {
  const {logoPosition} = props;

  return (
    <footer className="page-footer">
      <Logo logoPosition = {logoPosition}/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};


Footer.propTypes = {
  logoPosition: PropTypes.string.isRequired
};


export default Footer;
