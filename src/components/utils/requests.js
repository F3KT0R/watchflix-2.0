const API_KEY = `${process.env.WATCHFLIX2_API_KEY}`;
const base = 'https://api.themoviedb.org/3';

export const requests = () => {
  return {
    fetchNewMovies: `${base}/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.desc`,
    fetchSearch: `${base}/search/movie?api_key=${API_KEY}&query=`,
  };
};
