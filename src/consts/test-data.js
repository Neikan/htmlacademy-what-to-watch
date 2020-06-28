const MOVIE_POSTER = `the-grand-budapest-hotel-poster`;

export const LogoPosition = {
  HEADER: `header`,
  FOOTER: `footer`
};


export const PromoMovie = {
  TITLE: `The Grand Budapest Hotel poster`,
  GENRE: `Drama`,
  DATE: 2014
};


export const MOVIES = [
  {
    id: `mock-1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: MOVIE_POSTER,
    cover: `fantastic-beasts-the-crimes-of-grindelwald`,
    rating: 4.6,
    director: `Крис МакКей`,
    actors: `Крис О’Доннелл, Джек Николсон`,
    duration: 120,
    year: 2015,
    genre: `Documentary`,
    description: `Восемь лет назад Бэтмен растворился в ночи, превратившись из героя в беглеца.`
  }, {
    id: `mock-2`,
    title: `Bohemian Rhapsody`,
    poster: MOVIE_POSTER,
    cover: `bohemian-rhapsody`,
    rating: 9.1,
    director: `Крис МакКей`,
    actors: `Арнольд Шварценеггер, Кристиан Бэйл`,
    duration: 320,
    year: 1999,
    genre: `Crime`,
    description: `Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы от преступности, отравляющей город. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным испуганным горожанам под именем Джокер.`

  }, {
    id: `mock-3`,
    title: `Macbeth`,
    poster: MOVIE_POSTER,
    cover: `macbeth`,
    rating: 6.0,
    director: `Джоэл Шумахер`,
    actors: ` Ким Бейсингер, Том Харди, Кэнта Миякэ, Марион Котийяр`,
    duration: 20,
    year: 2020,
    genre: `Horror`,
    description: `Приняв на себя вину за смерть прокурора Харви Дента, он пожертвовал всем. Вместе с комиссаром Гордоном они решили, что так будет лучше для всех.`
  }
];


export const GENRES = [
  {
    id: `g1`,
    title: `All genres`,
    isActive: true
  }, {
    id: `g2`,
    title: `Comedies`,
    isActive: false
  }, {
    id: `g3`,
    title: `Crime`,
    isActive: false
  }
];


export const MarkupElement = {
  PROMO_BTN_PLAY: `btn--play`,
  PROMO_BTN_ADD_TO_LIST: `btn--list`,
  MOVIE_CARD: `small-movie-card`,
  MOVIE_CARD_TITLE: `small-movie-card__title`,
  MOVIE_CARD_COVER: `small-movie-card__image`,
  GENRE_LINK: `catalog__genres-link`
};
