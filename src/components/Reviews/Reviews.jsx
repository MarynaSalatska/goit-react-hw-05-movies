import  Loader  from 'components/Loader/Loader';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestReview } from 'servises/servises';

export default function Reviews() {
   const [reviewInfo, setReviewInfo] = useState([]);
   const { movieId } = useParams();
   // console.log(movieId);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    async function fetchReview() {
      setStatus('LOADING');
      try {
        setStatus('FULFILLED');
        const response = await requestReview(movieId);
        console.log([...response]);
        setReviewInfo([...response]);
      } catch (error) {
        setStatus({ status: 'REJECTED' });
      }
    }
    fetchReview();
  }, [movieId]);

  return [...reviewInfo].length > 0 ? (
    <div>
      <div>{status === 'LOADING' && <Loader />}Reviews</div>;
      <ul>
        {reviewInfo.map(el => (
          <li  key={el.id}>
            <h3 >Author: {el.author}</h3>
            <p >{el.content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h2>No reviews.</h2>
  );

}
