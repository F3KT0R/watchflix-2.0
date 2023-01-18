import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ callback }) {
  const [isMovies, setIsMovies] = useState();

  useEffect(() => {
    callback(isMovies);
  }, [isMovies]);

  return (
    <>
      <nav>
        <ul className='list-none'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink
              // to={isMovies ? '/movies' : '/tvshows'}
              onClick={() => {
                setIsMovies(isMovies === undefined ? true : !isMovies);
              }}
            >
              {isMovies === undefined
                ? 'Movies'
                : isMovies
                ? 'Movies'
                : 'TV Shows'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
