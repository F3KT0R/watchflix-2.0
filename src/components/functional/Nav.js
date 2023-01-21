import React, { useEffect, useState } from 'react';

export const Nav = ({ callbackToggle }) => {
  const [isMovies, setIsMovies] = useState('movie');

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
                setIsMovies((current) =>
                  current === 'movie' ? 'tv' : 'movie'
                );
              }}
            >
              {isMovies === 'movie' ? 'Movies' : 'TV Shows'}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
