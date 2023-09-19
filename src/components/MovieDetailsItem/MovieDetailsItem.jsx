import PropTypes from 'prop-types';
import default_poster_path from '../../styles/img/default_poster_path.jpg';
import {
  MovieWrapper,
  ImageWrapper,
  Image,
  DescriptionWrapper,
  Title,
  InfoWrapper,
  ListOne,
  ListTwo,
  ItemOne,
  ItemTwo,
  Span,
  AboutWrapper,
  SubTitle,
  Text,
} from './MovieDetailsItem.styled';

export const MovieDetailsItem = ({
  movie: {
    backdrop_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  },
}) => {
  const allGenres = genres.map(({ name }) => name).join(', ');
  return (
    <MovieWrapper>
      <ImageWrapper>
        <Image
          loading="lazy"
          width="704"
          height="400"
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
              : default_poster_path
          }
          alt={original_title}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <Title>{original_title}</Title>
        <InfoWrapper>
          <ListOne>
            <ItemOne>Release date</ItemOne>
            <ItemOne>Vote / Votes</ItemOne>
          </ListOne>
          <ListTwo>
            <ItemTwo>{release_date}</ItemTwo>
            <ItemTwo>
              <Span>{vote_average}</Span> / <Span>{vote_count}</Span>
            </ItemTwo>
          </ListTwo>
          <ListOne>
            <ItemOne>Popularity</ItemOne>
            <ItemOne>Genre</ItemOne>
          </ListOne>
          <ListTwo>
            <ItemTwo>{popularity}</ItemTwo>
            <ItemTwo>{allGenres}</ItemTwo>
          </ListTwo>
        </InfoWrapper>
        <AboutWrapper>
          <SubTitle>About</SubTitle>
          <Text>{overview}</Text>
        </AboutWrapper>
      </DescriptionWrapper>
    </MovieWrapper>
  );
};

MovieDetailsItem.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
