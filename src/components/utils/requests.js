const API_KEY = `${process.env.REACT_APP_WATCHFLIX2_API_KEY}`;
const base = 'https://api.themoviedb.org/3';

export const requests = {
  fetchPopularMovies: `${base}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  moviesSearch: `${base}/search/movie?api_key=${API_KEY}&query=`,
  tvshowsSearch: `${base}/search/tv?api_key=${API_KEY}&query=`,
};
