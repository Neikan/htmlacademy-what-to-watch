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
    id: `m1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald`
  }, {
    id: `m3`,
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody`
  }, {
    id: `m3`,
    title: `Macbeth`,
    poster: `macbeth`
  }, {
    id: `m4`,
    title: `Aviator`,
    poster: `aviator`
  }, {
    id: `m5`,
    title: `We need to talk about Kevin`,
    poster: `we-need-to-talk-about-kevin`
  }, {
    id: `m6`,
    title: `What We Do in the Shadows`,
    poster: `what-we-do-in-the-shadows`
  }, {
    id: `m7`,
    title: `Revenant`,
    poster: `revenant`
  }, {
    id: `m8`,
    title: `Johnny English`,
    poster: `johnny-english`
  }, {
    id: `m9`,
    title: `Shutter Island`,
    poster: `shutter-island`
  }, {
    id: `m10`,
    title: `Pulp Fiction`,
    poster: `pulp-fiction`
  }, {
    id: `m11`,
    title: `No Country for Old Men`,
    poster: `no-country-for-old-men`
  }, {
    id: `m12`,
    title: `Snatch`,
    poster: `snatch`
  }, {
    id: `m13`,
    title: `Moonrise Kingdom`,
    poster: `moonrise-kingdom`
  }, {
    id: `m14`,
    title: `Seven Years in Tibet`,
    poster: `seven-years-in-tibet`
  }, {
    id: `m15`,
    title: `Midnight Special`,
    poster: `midnight-special`
  }, {
    id: `m16`,
    title: `War of the Worlds`,
    poster: `war-of-the-worlds`
  }, {
    id: `m17`,
    title: `Dardjeeling Limited`,
    poster: `dardjeeling-limited`
  }, {
    id: `m18`,
    title: `Orlando`,
    poster: `orlando`
  }, {
    id: `m19`,
    title: `Mindhunter`,
    poster: `mindhunter`
  }, {
    id: `m20`,
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
