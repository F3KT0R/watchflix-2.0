import React from 'react';
import { AllContent } from '../functional/AllContent';
import { requests } from './requests';

export const linker = ({ toggle }) => {
  return toggle ? (
    <AllContent
      fetchUrl={requests.fetchPopularMovies}
      searchUrl={requests.moviesSearch}
    />
  ) : (
    <AllContent
      fetchUrl={requests.fetchPopularTVShows}
      searchUrl={requests.tvshowsSearch}
    />
  );
};
