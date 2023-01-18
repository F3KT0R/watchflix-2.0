import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [isMovies, setIsMovies] = useState(true);

  return (
    <>
      <nav>
        <ul className='list-none'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink
              to={isMovies ? '/movies' : '/tvshows'}
              onClick={() => setIsMovies(!isMovies)}
            >
              {isMovies ? 'Movies' : 'TV Shows'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
