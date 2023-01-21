import React from 'react';
import { truncate } from '../utils/truncate';

const image_base = 'https://image.tmdb.org/t/p/original/';

export const ContentCard = ({ title, name, backdrop_path, poster_path }) => {
  const characterLimit = 30;
  return (
    <div>
      <img
        src={
          poster_path ? image_base + poster_path : image_base + backdrop_path
        }
        className='xs:p-0 md:p-2 xl:p-4 cursor-pointer'
        loading='lazy'
      />
      <p className='px-2 cursor-pointer transition-all hover:scale-[1.2]'>
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
