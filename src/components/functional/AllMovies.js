import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Search from './Search';

function AllMovies({ fetchUrl, searchUrl }) {
  const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //     return () => {};
  //   }, []);

  return (
    <div>
      <Search searchURL={searchUrl} />
      <MovieCard />
    </div>
  );
}

export default AllMovies;
