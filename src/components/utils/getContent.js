import { instance } from '../utils/axios';

export const getContent = async (url) => {
  return await instance.get(url).then((res) => res.data.results);
};
