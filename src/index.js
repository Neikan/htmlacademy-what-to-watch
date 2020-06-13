import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Promo = {
  TITLE: `The Grand Budapest Hotel poster`,
  GENRE: `Drama`,
  DATE: 2014
};

const MOVIES = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald`
  }, {
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody`
  }, {
    title: `Macbeth`,
    poster: `macbeth`
  }, {
    title: `Aviator`,
    poster: `aviator`
  }, {
    title: `We need to talk about Kevin`,
    poster: `we-need-to-talk-about-kevin`
  }, {
    title: `What We Do in the Shadows`,
    poster: `what-we-do-in-the-shadows`
  }, {
    title: `Revenant`,
    poster: `revenant`
  }, {
    title: `Johnny English`,
    poster: `johnny-english`
  }, {
    title: `Shutter Island`,
    poster: `shutter-island`
  }, {
    title: `Pulp Fiction`,
    poster: `pulp-fiction`
  }, {
    title: `No Country for Old Men`,
    poster: `no-country-for-old-men`
  }, {
    title: `Snatch`,
    poster: `snatch`
  }, {
    title: `Moonrise Kingdom`,
    poster: `moonrise-kingdom`
  }, {
    title: `Seven Years in Tibet`,
    poster: `seven-years-in-tibet`
  }, {
    title: `Midnight Special`,
    poster: `midnight-special`
  }, {
    title: `War of the Worlds`,
    poster: `war-of-the-worlds`
  }, {
    title: `Dardjeeling Limited`,
    poster: `dardjeeling-limited`
  }, {
    title: `Orlando`,
    poster: `orlando`
  }, {
    title: `Mindhunter`,
    poster: `mindhunter`
  }, {
    title: `Midnight Special`,
    poster: `midnight-special`
  }
];


const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      promoTitle = {Promo.TITLE}
      promoGenre = {Promo.GENRE}
      promoDate = {Promo.DATE}
      movies = {MOVIES}
    />,
    root
);
