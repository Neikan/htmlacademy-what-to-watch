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
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fd/%22Night_After_Night%22_Trailer_1932.webm/%22Night_After_Night%22_Trailer_1932.webm.480p.vp9.webm`,
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
    description: `Восемь лет назад Бэтмен растворился в ночи, превратившись из героя в беглеца.`,
    reviews: []
  }, {
    id: `mock-2`,
    title: `Bohemian Rhapsody`,
    poster: MOVIE_POSTER,
    cover: `bohemian-rhapsody`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cd/12_Angry_Men_%281957%29_-_Trailer.webm/12_Angry_Men_%281957%29_-_Trailer.webm.480p.vp9.webm`,
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
    description: `Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы от преступности, отравляющей город. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным испуганным горожанам под именем Джокер.`,
    reviews: [{
      id: `reviews-9`,
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      author: `Lickona Matthew`,
      date: `December 2, 2016`,
      rating: 1.2
    }]
  }, {
    id: `mock-3`,
    title: `Macbeth`,
    poster: MOVIE_POSTER,
    cover: `macbeth`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ca/2001_A_Space_Odyssey_%281968%29_-_Trailer.webm/2001_A_Space_Odyssey_%281968%29_-_Trailer.webm.360p.vp9.webm`,
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
    description: `Приняв на себя вину за смерть прокурора Харви Дента, он пожертвовал всем. Вместе с комиссаром Гордоном они решили, что так будет лучше для всех.`,
    reviews: [{
      id: `reviews-1`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: `December 24, 2016`,
      rating: 8.9
    }, {
      id: `reviews-2`,
      text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: `Bill Goodykoontz`,
      date: `November 18, 2015`,
      rating: 5.0
    }, {
      id: `reviews-3`,
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
      author: `Amanda Greever`,
      date: `November 18, 2015`,
      rating: 3.3
    }, {
      id: `reviews-4`,
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      author: `Matthew Lickona`,
      date: `December 20, 2016`,
      rating: 7.2
    }, {
      id: `reviews-5`,
      text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      author: `Paula Fleri-Soler`,
      date: `December 20, 2016`,
      rating: 10
    }]
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
  GENRE_LINK: `catalog__genres-link`,
  MOVIE_TAB: `movie-nav__item`,
  BTN_SHOW_MORE: `catalog__button`
};
