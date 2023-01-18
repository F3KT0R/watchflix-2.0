import React, { useState } from 'react';
import AllMovies from '../functional/AllMovies';
import Nav from '../functional/Nav';
import Footer from '../functional/Footer';
import { requests } from '../utils/requests';

function App() {
  const [navCallback, setNavCallback] = useState(true);

  return (
    <div className='grid text-center align-middle self-center items-center font-roboto text-white bg-black min-h-screen'>
      <Nav callback={setNavCallback} />
      <AllMovies
        fetchUrl={requests.fetchNewMovies}
        movieSearch={requests.moviesSearch}
        tvshowSearch={requests.tvshowsSearch}
        isMovie={navCallback}
      />
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
