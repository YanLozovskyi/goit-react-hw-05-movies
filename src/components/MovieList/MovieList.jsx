import { Link, useLocation } from 'react-router-dom';
import default_poster_path from '../../img/default_poster_path.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(
          ({ name, id, poster_path, original_title, release_date }) => (
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : default_poster_path
                }
                alt={original_title ?? name}
              />
              <div>
                <h2>{original_title ?? name}</h2>
                <p>{release_date}</p>
              </div>
            </Link>
          )
        )}
      </ul>
    </>
  );
};

export default MovieList;
