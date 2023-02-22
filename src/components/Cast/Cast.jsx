import  Loader  from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { NavLink, useParams } from 'react-router-dom';
import { requestCast } from 'servises/servises';

export default function Cast() {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchCast() {
      setStatus('LOADING');
      try {
        setStatus('FULFILLED');
        const response = await requestCast(movieId);
        // console.log([...response.cast]);
        setCastInfo([...response.cast]);
      } catch (error) {
        setStatus({ status: 'REJECTED' });
      }
    }
    fetchCast(movieId);
  }, [movieId]);
  return (
    <div>
      {status === 'LOADING' && <Loader />}
      <ul>
        {castInfo &&
          castInfo.map(el => {
            return (
              <li key={el.id}>
                {Boolean(el.profile_path) && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${el.profile_path} `}
                    alt="{ el.name}"
                  />
                )}
                <p>{el.name}</p>
                <p>{el.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
