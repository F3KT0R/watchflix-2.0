import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Search from './Search';

function AllMovies({ fetchUrl, searchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTrigger(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      const request = await axios.get(fetchUrl, { cancelToken: source.token });
      setMovies(request.data.results);

      console.log(movies);
      return request;
    };

    fetchData();
    return () => {
      source.cancel();
    };
  }, [trigger]);

  return (
    <div>
      <Search searchURL={searchUrl} />
      {movies
        ? movies.map((item) => {
            return <MovieCard key={item.id} {...item} />;
          })
        : ''}
    </div>
  );
}

export default AllMovies;
