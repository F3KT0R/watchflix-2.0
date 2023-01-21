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
      <div className='grid grid-cols-8'>
        <img
          className='max-h-screen object-cover object-center col-span-6'
          src={
            (backdrop_path && image_base + backdrop_path) ||
            (poster_path && image_base + poster_path)
          }
        />
        <div className='col-span-2 bg-gradient-to-l from-black'></div>
      </div>
    </div>
  );
};
