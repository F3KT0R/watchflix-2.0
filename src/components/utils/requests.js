const API_KEY = `${process.env.REACT_APP_WATCHFLIX2_API_KEY}`;
const base = 'https://api.themoviedb.org/3';

export const requests = (type) => {
  return {
    fetchPopular: `${base}/discover/${type}?api_key=${API_KEY}&sort_by=popularity.desc&page=`,
    fetchSearch: `${base}/search/${type}?api_key=${API_KEY}&query=`,
  };
};
