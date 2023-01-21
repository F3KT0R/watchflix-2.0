import React, { useState } from 'react';
import { Nav } from '../functional/Nav';
import { AllContent } from '../functional/AllContent';
import { Footer } from '../functional/Footer';
import { requests } from '../utils/requests';

export const App = () => {
  const [navToggleCallback, setNavToggleCallback] = useState('movie');

  return (
    <div className='grid text-center align-middle self-center items-center font-roboto text-white selection:bg-gray-800 bg-black min-h-screen'>
      <Nav callbackToggle={setNavToggleCallback} />
      <AllContent
        fetchUrl={requests(navToggleCallback).fetchPopular}
        searchUrl={requests(navToggleCallback).fetchSearch}
        toggle={navToggleCallback}
      />
      <Footer />
    </div>
  );
};

/**
 * useSearchParams
 * TMDB: get similar movies
 */
