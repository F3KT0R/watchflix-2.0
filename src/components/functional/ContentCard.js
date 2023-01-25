import React from 'react';
import { truncate } from '../utils/truncate';

const image_base = 'https://image.tmdb.org/t/p/original/';

export const ContentCard = ({ title, name, backdrop_path, poster_path }) => {
  const characterLimit = 30;
  return (
    <div className='border-2 border-gray-600 hover:bg-gray-600 transition-all'>
      <img
        src={
          poster_path ? image_base + poster_path : image_base + backdrop_path
        }
        className='xs:p-0 md:pb-2 xl:pb-4 cursor-pointer'
        loading='lazy'
      />
      <p className='px-1 pb-3 cursor-pointer transition-all hover:scale-[1.2]'>
        {title
          ? title.length > characterLimit
            ? truncate(title, characterLimit)
            : title
          : name.length > characterLimit
          ? truncate(name, characterLimit)
          : name}
      </p>
    </div>
  );
};
