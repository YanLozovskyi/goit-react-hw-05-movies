import { Link, useLocation } from 'react-router-dom';
import default_poster_path from '../../img/default_poster_path.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(({ id, poster_path, original_title, release_date }) => (
          <Link key={id} to={`/moovies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : default_poster_path
              }
              alt={original_title}
            />
            <div>
              <h2>{original_title}</h2>
              <p>{release_date}</p>
            </div>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
