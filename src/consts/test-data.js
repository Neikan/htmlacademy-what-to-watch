const MOVIE_POSTER = `the-grand-budapest-hotel-poster`;

export const LogoPosition = {
  HEADER: `header`,
  FOOTER: `footer`
};


export const MOVIES = [
  {
    id: `mock-1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: MOVIE_POSTER,
    cover: `fantastic-beasts-the-crimes-of-grindelwald`,
    rating: {
      score: 4.6,
      level: `Normal`,
      countVotes: 240,
    },
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
    rating: {
      score: 9.1,
      level: `Very good`,
      countVotes: 10,
    },
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
    rating: {
      score: 6.0,
      level: `Good`,
      countVotes: 1240,
    },
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
