import React, { useEffect, useState } from 'react';

export const Nav = ({ callbackToggle }) => {
  const [isMovies, setIsMovies] = useState(true);

  useEffect(() => {
    callbackToggle(isMovies);
  }, [isMovies]);

  return (
    <>
      <nav>
        <ul className='list-none grid grid-cols-10 py-10'>
          <li>
            <a className='cursor-pointer selection:bg-transparent' href='/'>
              Home
            </a>
          </li>
          <li>
            <a
              className='cursor-pointer selection:bg-transparent'
              onClick={() => {
                setIsMovies(!isMovies);
              }}
            >
              {isMovies ? 'Movies' : 'TV Shows'}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
