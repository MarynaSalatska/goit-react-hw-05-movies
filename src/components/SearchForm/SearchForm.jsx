import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SearchForm({ handleSubmit }) {
  // const [status, setStatus] = useState('idle');
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('name');
  const [name, setName] = useState(searchName ?? '');
  // const location = useLocation();

  const handleInput = e => {
    setName(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    handleSubmit(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Enter  movie"
          name={name}
          value={name || ''}
          onChange={handleInput}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
