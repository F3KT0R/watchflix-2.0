import React, { useState } from 'react';
import { Nav } from '../functional/Nav';
import { AllContent } from '../functional/AllContent';
import { Footer } from '../functional/Footer';
import { requests } from '../utils/requests';

export const App = () => {
  const [navToggleCallback, setNavToggleCallback] = useState('movie');
  const [pickedContent, setPickedContent] = useState();

  return (
    <div className='grid text-center align-middle self-center items-center font-roboto text-white selection:bg-gray-800 bg-black min-h-screen'>
      {!pickedContent && <Nav callbackToggle={setNavToggleCallback} />}
      <AllContent
        fetchUrl={requests(navToggleCallback).fetchPopular}
        searchUrl={requests(navToggleCallback).fetchSearch}
        toggle={navToggleCallback}
        pickedToggle={setPickedContent}
      />
      <Footer />
    </div>
  );
};

/**
 * useSearchParams
 * TMDB: get similar movies
 */
