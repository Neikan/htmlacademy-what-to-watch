// Импорт типов, констант, утилит
import {getTextualRating} from "../../utils/common";


const moviesAdapter = (movie) => {
  return {
    id: `${movie.id}`,
    title: movie.name,
    poster: movie.poster_image,
    cover: movie.preview_image,

    backgroundImage: movie.background_image,
    backgroundColor: movie.background_color,

    video: movie.video_link,
    preview: movie.preview_video_link,

    description: movie.description,

    rating: {
      score: movie.rating,
      level: getTextualRating(movie.rating),
      countVotes: movie.scores_count
    },

    director: movie.director,
    actors: movie.starring.join(`, `),

    duration: movie.run_time,
    genre: movie.genre,
    year: movie.released,

    isFavorite: movie.is_favorite
  };
};


const reviewsAdapter = (review) => {
  return {
    id: `${review.id}`,
    text: review.comment,

    author: {
      id: `${review.user.id}`,
      name: review.user.name,
    },

    rating: review.rating,
    date: review.date
  };
};


export {moviesAdapter, reviewsAdapter};
