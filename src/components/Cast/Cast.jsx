import { TMDB_API } from 'api/FetchMovieApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import default_poster_path from '../../styles/img/default_vertical_poster_path.jpg';
import { Notifications, SkeletonCard } from 'components';
import { List, Item, Image, InfoWrap, Title, Text } from './Cast.styled';

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

    return () => controller.abort();
  }, [movieId]);

  return (
    <>
      {cast && !isLoading && (
        <List>
          {cast
            .slice(0, 32)
            ?.map(
              ({ profile_path, id, original_name, popularity, character }) => (
                <Item key={id}>
                  <Link
                    to={`https://www.google.com/search?q=${original_name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
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
                    <InfoWrap>
                      <Title>{original_name}</Title>
                      <Text>Character: {character}</Text>
                      <Text>Popularity: {popularity}</Text>
                    </InfoWrap>
                  </Link>
                </Item>
              )
            )}
        </List>
      )}
      {isLoading && <SkeletonCard />}
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
