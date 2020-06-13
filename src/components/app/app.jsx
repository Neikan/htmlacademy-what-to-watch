import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const App = (props) => {
  const {promoTitle, promoGenre, promoDate} = props;

  return <Main
    promoTitle = {promoTitle}
    promoGenre = {promoGenre}
    promoDate = {promoDate}
  />;
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoDate: PropTypes.number.isRequired,
};


export default App;
