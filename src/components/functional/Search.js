import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '../utils/useDebounce';

function Search({ searchURL }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const debounceQuery = useDebounce(query);

  useEffect(() => {
    const source = axios.CancelToken.source();

    (async () => {
      setSuggestions([]);
      if (debounceQuery.length > 0) {
        await axios
          .get(searchURL + debounceQuery, { cancelToken: source.token })
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
    <div>
      <input
        type='text'
        name='search'
        placeholder='Search...'
        value={query}
        autoComplete='off'
        className='text-black p-2'
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <div>
        <ul>
          {suggestions.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Search;
