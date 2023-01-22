import React, { useEffect, useState } from 'react';

export const Nav = ({ callbackToggle }) => {
  const [isMovies, setIsMovies] = useState('movie');

  useEffect(() => {
    callbackToggle(isMovies);
  }, [isMovies]);

  return (
    <>
      <nav>
        <ul className='list-none grid py-10'>
          <li>
            <a
              className='cursor-pointer selection:bg-transparent border-2 px-10 py-3 rounded border-gray-900 hover:bg-gray-900 transition-all'
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
