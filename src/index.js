import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Promo = {
  TITLE: `The Grand Budapest Hotel poster`,
  GENRE: `Drama`,
  DATE: 2014
};

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      promoTitle = {Promo.TITLE}
      promoGenre = {Promo.GENRE}
      promoDate = {Promo.DATE}
    />,
    root
);
