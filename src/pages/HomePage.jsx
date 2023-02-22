import  Loader  from 'components/Loader/Loader';
import  MovieList  from 'components/MovieList/MovieList';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { requestMovies } from 'servises/servises';


export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchMovies() {
      setStatus('LOADING');
      try {
        setStatus('FULFILLED');
        const movies = await requestMovies();

        setMovies(movies);
      } catch (error) {
        setStatus({ status: 'REJECTED' });
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
      {status === 'LOADING' && <Loader />}
    </>
  );
}
