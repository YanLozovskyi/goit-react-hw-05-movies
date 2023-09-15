import axios from 'axios';

const API_KEY = '28909b5df6d6afd9591e6fc0c7cef11e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getTrendMovieByParam = async (param, controller) => {
  const response = await axios.get(
    `trending/movie/${param}?api_key=${API_KEY}`,
    {
      signal: controller.signal,
    }
  );
  return response.data.results;
};

export const TMDB_API = { getTrendMovieByParam };
