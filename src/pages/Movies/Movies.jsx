import { TMDB_API } from 'api/FetchMovieApi';
import { MediaLoader } from 'components/MediaLoader/MediaLoader';
import MovieList from 'components/MovieList/MovieList';
import Notifications from 'components/Notifications/Notifications';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const handleSubmit = value => {
    const trimmedValue = value.trim();

    if (trimmedValue === '') return setSearchParams({});
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (query) return;
    const controller = new AbortController();

    const getTrendMovies = async () => {
      setIsLoading(true);
      try {
        const response = await TMDB_API.getTrendMoviesByParam(
          'week',
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
  }, [query]);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    const controller = new AbortController();

    const searchMoviesByQuery = async () => {
      try {
        const response = await TMDB_API.searchMoviesByQuery(
          query,
          page,
          controller
        );
        setMovies(response.results);
        setError(false);
        setIsLoading(false);
      } catch (error) {
        if (error.message === 'canceled') return;

        setError(error.message);
        setIsLoading(false);
      }
    };
    searchMoviesByQuery();

    return () => controller.abort();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {!isLoading && !error && !query && (
        <Notifications message={'Weekly trends'} />
      )}
      {!isLoading && !error && query && movies?.length !== 0 && (
        <Notifications message={`Movies by result ${query}`} />
      )}
      {!isLoading && !error && movies?.length === 0 && query && (
        <Notifications
          message={`No results were found for your movie search '${query}'. Please try a different query`}
        />
      )}
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

export default Movies;
