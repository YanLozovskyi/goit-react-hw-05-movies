import { TMDB_API } from 'api/FetchMovieApi';
import default_poster_path from '../../img/default_poster_path.jpg';
import { MediaLoader } from 'components/MediaLoader/MediaLoader';
import Notifications from 'components/Notifications/Notifications';
import { useEffect, useState } from 'react';

const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();

    const getMovieReviews = async () => {
      try {
        setIsLoading(true);
        const response = await TMDB_API.getMovieReviewsById(
          movieId,
          controller
        );
        setReviews(response);
        setError(false);
        setIsLoading(false);
      } catch (error) {
        if (error.message === 'canceled') return;

        setError(error.message);
        setIsLoading(false);
      }
    };
    getMovieReviews();

    return () => controller.abort();
  }, [movieId]);

  return (
    <>
      {reviews && !isLoading && (
        <ul>
          {reviews.map(
            ({
              content,
              id,
              updated_at,
              author_details: { rating, name, avatar_path },
            }) => (
              <li key={id}>
                <div>
                  <img
                    src={
                      avatar_path
                        ? `https://image.tmdb.org/t/p/w500/${avatar_path}`
                        : default_poster_path
                    }
                    alt={'reviews'}
                  />
                  <div>
                    <p>Author: {name}</p>
                    <p>Rating: {rating}</p>
                  </div>
                </div>
                <div>
                  <p>{content}</p>
                  <p>{updated_at}</p>
                </div>
              </li>
            )
          )}
        </ul>
      )}
      {isLoading && <MediaLoader />}
      {!error && reviews?.length === 0 && (
        <Notifications
          message={'Sorry, There are no reviews in this Movie...'}
        />
      )}
      {error && (
        <Notifications
          message={
            "Sorry, but something went wrong while attempting to generate the review's of this movie."
          }
        />
      )}
    </>
  );
};

export default Reviews;
