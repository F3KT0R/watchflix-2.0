import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Search from './Search';

function AllMovies({ fetchUrl, movieSearch, tvshowSearch, isMovie }) {
  const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //     return () => {};
  //   }, []);

  return (
    <div>
      <Search
        movieSearch={movieSearch}
        tvshowSearch={tvshowSearch}
        isMovie={isMovie}
      />
      <MovieCard />
    </div>
  );
}

export default AllMovies;
