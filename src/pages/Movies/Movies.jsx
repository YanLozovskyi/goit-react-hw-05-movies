import { TMDB_API } from 'api/FetchMovieApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieList from 'components/MovieList/MovieList';
import {
  SearchBar,
  Notifications,
  Button,
  SkeletonMovieCard,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isQueryEmptyNotified, setIsQueryEmptyNotified] = useState(true);

  const query = searchParams.get('query') ?? '';

  const handleSubmit = value => {
    const trimmedValue = value.trim();

    if (trimmedValue === '') {
      setSearchParams({});
      if (!isQueryEmptyNotified) {
        toast.info("Your query is empty. We'll show you this week's trends.");
        setIsQueryEmptyNotified(true);
      } else {
        toast.info('Please enter your request');
      }
      return;
    }
    if (trimmedValue === query)
      return toast.info(
        `You've already entered: ${query}. Enter another request`
      );
    setSearchParams({ query: value });
    setPage(1);
  };

  useEffect(() => {
    if (query) return;
    const controller = new AbortController();

    const getTrendMovies = async () => {
      setIsVisible(!!query);
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

    if (page === 1) {
      setMovies([]);
      setIsLoading(true);
    }

    const controller = new AbortController();

    const searchMoviesByQuery = async () => {
      setIsLoadMore(true);
      try {
        const {
          total_pages,
          total_results,
          results,
          page: currentPage,
        } = await TMDB_API.searchMoviesByQuery(query, page, controller);
        setMovies(prev => [...prev, ...results]);
        setIsVisible(currentPage < total_pages);
        setError(false);
        setIsLoadMore(false);
        setIsLoading(false);
        if (total_results > 0 && page === 1) {
          toast.info(`Found ${total_results} movies`);
          setIsQueryEmptyNotified(false);
        }
      } catch (error) {
        if (error.message === 'canceled') return;

        setError(error.message);
        setIsLoadMore(false);
      }
    };
    searchMoviesByQuery();

    return () => controller.abort();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
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
      {isLoading && <SkeletonMovieCard />}
      {!isLoading && <MovieList movies={movies} />}
      {isVisible && query && (
        <Button
          onClick={handleLoadMore}
          disabled={isLoadMore}
          $marginLeft={'auto'}
        >
          {isLoadMore ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </>
  );
};

export default Movies;
