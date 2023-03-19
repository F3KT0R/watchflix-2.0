import React from 'react';
import { truncate } from '../utils/truncate';

const image_base = 'https://image.tmdb.org/t/p/original/';

export const ContentCard = ({
  title,
  name,
  backdrop_path,
  poster_path,
  release_date,
  first_air_date,
}) => {
  const characterLimit = 30;
  return (
    <div className='hover:bg-gray-600 transition-all'>
      <img
        src={
          poster_path ? image_base + poster_path : image_base + backdrop_path
        }
        className='border-2 border-gray-600 cursor-pointer'
        loading='lazy'
      />
      <p className='px-1 py-4 cursor-pointer transition-all hover:scale-[1.2]'>
        {title
          ? title.length > characterLimit
            ? truncate(title, characterLimit)
            : title
          : name.length > characterLimit
          ? truncate(name, characterLimit)
          : name}{' '}
        {release_date && '(' + release_date.split('-')[0] + ')'}
        {first_air_date && '(' + first_air_date.split('-')[0] + ')'}
      </p>
      <p className='px-1 py-4 cursor-pointer transition-all hover:scale-[1.2]'></p>
    </div>
  );
};
