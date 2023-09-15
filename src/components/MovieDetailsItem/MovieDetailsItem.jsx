import PropTypes from 'prop-types';
import default_poster_path from '../../img/default_poster_path.jpg';

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
    <div>
      <div>
        <img
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
      </div>
      <div>
        <h1>{original_title}</h1>
        <div>
          <ul>
            <li>Release date</li>
            <li>Vote / Votes</li>
          </ul>
          <ul>
            <li>{release_date}</li>
            <li>
              <span>{vote_average}</span> / <span>{vote_count}</span>
            </li>
          </ul>
          <ul>
            <li>Popularity</li>
            <li>Genre</li>
          </ul>
          <ul>
            <li>{popularity}</li>
            <li>{allGenres}</li>
          </ul>
        </div>
        <div>
          <p>About</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

MovieDetailsItem.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
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
