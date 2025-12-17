import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => (
  <div className="movies">
    {!query
      ? movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)
      : movies
          .filter(movie => {
            const q = query.toLowerCase();

            return (
              movie.title.toLowerCase().includes(q) ||
              movie.description.toLowerCase().includes(q)
            );
          })
          .map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </div>
);
