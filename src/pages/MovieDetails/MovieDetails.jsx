import { TMDB_API } from 'api/FetchMovieApi';
import { Suspense, useState, useEffect, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import {
  MovieDetailsItem,
  MediaLoader,
  PageLoader,
  Notifications,
  Button,
} from 'components';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const controller = new AbortController();

    const getMovieById = async () => {
      try {
        setIsLoading(true);
        const response = await TMDB_API.getMovieDetailsById(
          movieId,
          controller
        );
        setMovie(response);
        setError(false);
        setIsLoading(false);
      } catch (error) {
        if (error.message === 'canceled') return;

        setError(error.message);
        setIsLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <Button $marginBottom={'20px'}>{'Back'}</Button>
      </Link>
      {error && (
        <Notifications
          message={
            'Sorry, but something went wrong while attempting to generate the movie. We are working to resolve this issue as soon as possible. Please try again later or contact our support team for further assistance. Thank you for your patience and understanding!'
          }
        />
      )}
      {movie && !isLoading && <MovieDetailsItem movie={movie} />}
      {isLoading && <MediaLoader />}
      {!error && !isLoading && (
        <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
          <Link to="cast">
            <Button>Cast</Button>
          </Link>
          <Link to="reviews">
            <Button>Reviews</Button>
          </Link>
        </div>
      )}
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
