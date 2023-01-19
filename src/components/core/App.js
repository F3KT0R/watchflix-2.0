import React, { useEffect, useState } from 'react';
import AllMovies from '../functional/AllMovies';
import Nav from '../functional/Nav';
import Footer from '../functional/Footer';
import { requests } from '../utils/requests';

function App() {
  const [navCallback, setNavCallback] = useState(true);
  let searchUrl = requests.moviesSearch;

  useEffect(() => {
    searchUrl = navCallback ? requests.moviesSearch : requests.tvshowsSearch;
  }, [navCallback]);

  return (
    <div className='grid text-center align-middle self-center items-center font-roboto text-white bg-black min-h-screen'>
      <Nav callback={setNavCallback} />
      <AllMovies fetchUrl={requests.fetchPopularMovies} searchUrl={searchUrl} />
      <Footer />
    </div>
  );
}

export default App;

/**
 * useSearchParams
 * Routes & Route
 * TMDB: get similar movies
 */
