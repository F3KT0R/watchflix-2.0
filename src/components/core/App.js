import React, { useState } from 'react';
import { Nav } from '../functional/Nav';
import { AllContent } from '../functional/AllContent';
import { Footer } from '../functional/Footer';

export const App = () => {
  const [navToggleCallback, setNavToggleCallback] = useState('movie');
  const [pickedContent, setPickedContent] = useState();

  return (
    <div className='grid text-center align-middle self-center items-center font-roboto text-white selection:bg-gray-600 min-h-screen bg-gradient-radial from-gray-900 to-zinc-900'>
      {!pickedContent && <Nav callbackToggle={setNavToggleCallback} />}
      <AllContent toggle={navToggleCallback} pickedToggle={setPickedContent} />
      <Footer />
    </div>
  );
};
