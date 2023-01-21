import React, { useState } from 'react';
import { linker as Linker } from '../utils/linker';
import { Nav } from '../functional/Nav';
import { Footer } from '../functional/Footer';

function App() {
  const [navToggleCallback, setNavToggleCallback] = useState(true);

  return (
    <div className='grid text-center align-middle self-center items-center font-roboto text-white selection:bg-gray-800 bg-black min-h-screen'>
      <Nav callbackToggle={setNavToggleCallback} />
      <Linker toggle={navToggleCallback} />
      <Footer />
    </div>
  );
}

export default App;

/**
 * useSearchParams
 * TMDB: get similar movies
 */
