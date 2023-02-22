import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink state={{ from: location }} to={`/movies/${movie.id}`}>
                <span>{movie.title}</span>
                {/* <span>{movie.id}</span> */}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
}
