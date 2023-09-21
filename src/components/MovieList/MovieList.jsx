import { Link, useLocation } from 'react-router-dom';
import default_poster_path from '../../styles/img/default_poster_path.jpg';
import { formatDate } from 'helpers';
import {
  List,
  Item,
  Image,
  InfoWrap,
  Title,
  DateText,
} from './MovieList.style';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(
          ({ name, id, poster_path, original_title, release_date }) => (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Image
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : default_poster_path
                  }
                  alt={original_title ?? name}
                />
                <InfoWrap>
                  <Title>{original_title ?? name}</Title>
                  <DateText>
                    {formatDate(release_date, 'dd MMMM yyyy')}
                  </DateText>
                </InfoWrap>
              </Link>
            </Item>
          )
        )}
      </List>
    </>
  );
};

export default MovieList;
