import axios from 'axios';

const API_KEY = '28909b5df6d6afd9591e6fc0c7cef11e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getTrendMoviesByParam = async (param, controller) => {
  const response = await axios.get(`trending/movie/${param}`, {
    params: {
      api_key: API_KEY,
    },
    signal: controller.signal,
  });
  return response.data.results;
};

const getMovieDetailsById = async (movieId, controller) => {
  const response = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
    signal: controller.signal,
  });
  return response.data;
};

const getMovieCastById = async (movieId, controller) => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
    signal: controller.signal,
  });
  return response.data.cast;
};

const getMovieReviewsById = async (movieId, controller) => {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
    signal: controller.signal,
  });
  return response.data.results;
};

// const SearchMoviesByQuery = async (query, page, controller) => {
//   const response = await axios.get(
//     `search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
//     {
//       signal: controller.signal,
//     }
//   );
//   return response.data;
// };

const SearchMoviesByQuery = async (query, page, controller) => {
  const response = await axios.get('search/movie', {
    params: {
      query,
      page,
      api_key: API_KEY,
    },
    signal: controller.signal,
  });
  return response.data;
};

export const TMDB_API = {
  getTrendMoviesByParam,
  SearchMoviesByQuery,
  getMovieDetailsById,
  getMovieCastById,
  getMovieReviewsById,
};
