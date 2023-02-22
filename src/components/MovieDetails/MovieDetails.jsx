import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { StyledFlex, StyledUl } from 'pages/Style.styled';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { requestMovieDetails } from 'servises/servises';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [status, setStatus] = useState('idle');
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    async function fetchMovieId() {
      setStatus('LOADING');
      try {
        setStatus('FULFILLED');
        const response = await requestMovieDetails(movieId);
        setMovieInfo({ ...response });
      } catch (error) {
        setStatus({ status: 'REJECTED' });
      }
    }
    fetchMovieId();
  }, [movieId]);

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      {status === 'LOADING' && <Loader />}
      <StyledFlex StyledFlex>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path} `}
            alt="movieInfo.title"
          />
        </div>
        <div>
          <h2>
            {movieInfo.title}
            <span> {movieInfo.release_date}</span>
          </h2>
          <p>
            User score: <span>{movieInfo.vote_average}</span>
          </p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          <p>{movieInfo.genres && movieInfo.genres.map(el => `${el.name} `)}</p>
        </div>
      </StyledFlex>
      <div>
        <StyledUl>
          <li>
            <NavLink state={location.state} to={`/movies/${movieId}/cast`}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink state={location.state} to={`/movies/${movieId}/reviews`}>
              Reviews
            </NavLink>
          </li>
        </StyledUl>
        <Outlet />
      </div>
      {/* <Cast/> */}
    </div>
  );
}
