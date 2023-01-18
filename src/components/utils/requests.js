const API_KEY = `${process.env.REACT_APP_WATCHFLIX2_API_KEY}`;
const base = 'https://api.themoviedb.org/3';

export const requests = {
  fetchNewMovies: `${base}/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.desc`,
  moviesSearch: `${base}/search/movie?api_key=${API_KEY}&query=`,
  tvshowsSearch: `${base}/search/tv?api_key=${API_KEY}&query=`,
};
