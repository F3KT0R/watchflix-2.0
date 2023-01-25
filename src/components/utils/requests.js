const API_KEY = `${process.env.REACT_APP_WATCHFLIX2_API_KEY}`;

export const requests = (type, id) => {
  return {
    fetchPopular: `/discover/${type}?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchSearch: `/search/${type}?api_key=${API_KEY}&query=`,
    fetchRecommendations: `/${type}/${id}/recommendations?api_key=${API_KEY}`,
  };
};
