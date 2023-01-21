import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url, additionalParam) => {
  const [data, setData] = useState([]);
  let request;
  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      request = await axios.get(url + additionalParam, {
        cancelToken: source.token,
      });
      setData(request.data.results);
      return request;
    };

    fetchData();
    return () => {
      source.cancel();
    };
  }, [request, additionalParam]);

  return data;
};
