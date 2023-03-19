import React, { useState } from 'react';
import { Nav } from '../functional/Nav';
import { Menu } from '../functional/Menu';
import { AllContent } from '../functional/AllContent';
import { Footer } from '../functional/Footer';

export const App = () => {
  const [navToggleCallback, setNavToggleCallback] = useState('movie');
  const [pickedContent, setPickedContent] = useState();

  return (
    <div className='grid grid-rows-6 grid-cols-7 text-center align-middle self-center items-center font-roboto text-white selection:bg-gray-600 min-h-screen bg-gradient-radial from-gray-900 to-zinc-900'>
      {!pickedContent && (
        <div className='grid col-span-7'>
          <Nav callbackToggle={setNavToggleCallback} />
        </div>
      )}
      <div className='grid row-span-3 col-span-1'>
        <Menu />
      </div>
      <div className='grid row-span-3 col-span-6'>
        <AllContent
          toggle={navToggleCallback}
          pickedToggle={setPickedContent}
        />
      </div>
      <div className='grid col-span-7'>
        <Footer />
      </div>
    </div>
  );
};
