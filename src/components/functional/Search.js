import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '../utils/useDebounce';

export const Search = ({ callback, url }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const debounceQuery = useDebounce(query);

  useEffect(() => {
    const source = axios.CancelToken.source();

    (async () => {
      setSuggestions([]);
      if (debounceQuery.length > 0) {
        await axios
          .get(url + debounceQuery, {
            cancelToken: source.token,
          })
          .then((res) => setSuggestions(res.data.results))
          .then((err) => {
            if (axios.isCancel(err)) {
              console.log('Axios request aborted!');
            } else console.log(err);
          });
      }
    })();

    return () => {
      source.cancel();
    };
  }, [debounceQuery]);

  return (
    <div className='p-4 items-center text-center justify-center'>
      <input
        type='text'
        name='search'
        placeholder='Search...'
        value={query}
        autoComplete='off'
        className='p-4 bg-transparent w-full text-center outline-none'
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <div className='absolute bg-opacity-90 bg-black left-1/2 transform -translate-x-1/2'>
        <ul>
          {suggestions.map((suggestion) => {
            return (
              <li
                key={suggestion.id}
                className='py-1 px-12 cursor-pointer hover:scale-[1.1] transition-all'
                onClick={() => callback(suggestion)}
              >
                {suggestion.title || suggestion.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
