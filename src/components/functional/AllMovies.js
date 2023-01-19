import React, { useEffect, useState } from 'react';
import { useFetch } from '../utils/useFetch';
import MovieCard from './MovieCard';
import Search from './Search';

function AllMovies({ fetchUrl, searchUrl }) {
  const [movies, setMovies] = useState([]);
  const data1 = useFetch(fetchUrl, 1);
  const data2 = useFetch(fetchUrl, 2);
  const data3 = useFetch(fetchUrl, 3);

  useEffect(() => {
    setMovies(data1);
    setMovies((curr) => [...curr, ...data2]);
    setMovies((curr) => [...curr, ...data3]);
  }, [data1, data2, data3]);

  return (
    <div>
      <Search searchURL={searchUrl} />
      <div className='grid align-middle self-center items-center 3xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 xs:grid-cols-3'>
        {movies
          ? movies.map((item) => {
              return (
                <div key={item.id} className='xs:p-2 xl:p-4 2xl:p-6'>
                  <MovieCard {...item} />
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
}

export default AllMovies;
