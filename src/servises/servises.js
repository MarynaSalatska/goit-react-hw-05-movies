import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const requestMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=fbd6a6d8896024a6d6681f42c8e9a3b7'
  );
  return data.results;
};

export const requestMovieDetails = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=fbd6a6d8896024a6d6681f42c8e9a3b7&language=en-US`
  );
  return data;
};

export const requestSearchPost = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=fbd6a6d8896024a6d6681f42c8e9a3b7&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return data.results;
};

export const requestCast = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fbd6a6d8896024a6d6681f42c8e9a3b7&language=en-US`
  );
  return data;
};

export const requestReview = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=fbd6a6d8896024a6d6681f42c8e9a3b7&language=en-US`
  );
  return data;
};