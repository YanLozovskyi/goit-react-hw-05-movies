import { TMDB_API } from 'api/FetchMovieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import default_poster_path from '../../img/default_poster_path.jpg';
import { MediaLoader } from 'components/MediaLoader/MediaLoader';
import Notifications from 'components/Notifications/Notifications';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();

    const getMovieCast = async () => {
      try {
        setIsLoading(true);
        const response = await TMDB_API.getMovieCastById(movieId, controller);
        setCast(response);
        setError(false);
        setIsLoading(false);
      } catch (error) {
        if (error.message === 'canceled') return;

        setError(error.message);
        setIsLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {cast && !isLoading && (
        <ul>
          {cast
            .slice(0, 32)
            ?.map(
              ({ profile_path, id, original_name, popularity, character }) => (
                <li key={id}>
                  <img
                    loading="lazy"
                    width="250"
                    height="360"
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : default_poster_path
                    }
                    alt={original_name}
                  />
                  <div>
                    <h2>{original_name}</h2>
                    <p>Character: {character}</p>
                    <p>Popularity: {popularity}</p>
                  </div>
                </li>
              )
            )}
        </ul>
      )}
      {isLoading && <MediaLoader />}
      {!error && cast?.length === 0 && (
        <Notifications message={'Sorry, There are no cast in this Movie...'} />
      )}
      {error && (
        <Notifications
          message={
            "Sorry, but something went wrong while attempting to generate the cast's of this movie."
          }
        />
      )}
    </>
  );
};

export default Cast;
