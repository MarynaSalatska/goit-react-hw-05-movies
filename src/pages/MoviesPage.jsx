import  Loader  from 'components/Loader/Loader';
import  MovieList  from 'components/MovieList/MovieList';
import  SearchForm  from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestSearchPost } from 'servises/servises';

export default function MoviesPage() {
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [postDetails, setPostDetails] = useState([]);

  const handleSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };
  console.log(searchQuery);
  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchSearchId() {
      setStatus('LOADING');
      try {
        setStatus('FULFILLED');
        const response = await requestSearchPost(searchQuery);
        console.log(response);

        setPostDetails([...response]);
      } catch (error) {
        setStatus({ status: 'REJECTED' });
      }
    }

    fetchSearchId(searchQuery);
  }, [searchQuery]);

  console.log(postDetails);
  return (
    <>
      {status === 'LOADING' && <Loader />}
      <SearchForm handleSubmit={handleSubmit} />
      <MovieList movies={postDetails} />
    </>
  );
}
// SearchForm handleSubmit;