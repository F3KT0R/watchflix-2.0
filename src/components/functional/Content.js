import React from 'react';

const image_base = 'https://image.tmdb.org/t/p/original/';

export const Content = ({
  id,
  title,
  original_title,
  name,
  original_name,
  backdrop_path,
  poster_path,
  overview,
  release_date,
  vote_average,
  callback,
}) => {
  return (
    <div className='grid p-10 align-middle object-center self-center items-center'>
      <div className='grid align-middle object-center self-center items-center'>
        <img
          className='max-h-screen object-cover object-center'
          src={image_base + backdrop_path}
        />
      </div>
    </div>
  );
};
