import { useEffect, useState } from 'react';
import { TMDB_API } from 'api/FetchMovieApi';

import { MediaLoader, Notifications } from 'components';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getTrendMovies = async () => {
      setIsLoading(true);
      try {
        const response = await TMDB_API.getTrendMoviesByParam(
          'day',
          controller
        );

        setMovies(response);

        setError(false);
        setIsLoading(false);
      } catch (error) {
        if (error.message === 'canceled') return;

        setError(error.message);
        setIsLoading(false);
      }
    };
    getTrendMovies();

    return () => controller.abort();
  }, []);

  return (
    <>
      {!error && <Notifications message={'daily trends'} />}
      {error && (
        <Notifications
          message={
            'Sorry, but something went wrong while attempting to generate the movies. We are working to resolve this issue as soon as possible. Please try again later or contact our support team for further assistance. Thank you for your patience and understanding!'
          }
        />
      )}
      {isLoading && <MediaLoader />}
      {!isLoading && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
