import React from 'react';
import PropTypes from 'prop-types';
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};
