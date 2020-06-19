import React from "react";
import Logo from "./../logo/logo.jsx";
import {LogoPosition} from "../../consts/common-data.js";


const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo logoPosition = {LogoPosition.FOOTER}/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};


export default Footer;
