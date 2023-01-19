import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url, pageNumber) => {
  const [data, setData] = useState([]);
  let request;
  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      request = await axios.get(url + pageNumber, {
        cancelToken: source.token,
      });
      setData(request.data.results);
      return request;
    };

    fetchData();
    return () => {
      source.cancel();
    };
  }, [request, pageNumber]);

  return data;
};
