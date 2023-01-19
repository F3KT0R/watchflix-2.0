import React from 'react';
import { truncate } from '../utils/truncate';

const image_base = 'https://image.tmdb.org/t/p/original/';

function MovieCard({
  id,
  title,
  original_title,
  backdrop_path,
  poster_path,
  overview,
  release_date,
  vote_average,
}) {
  const titleLen = 30;
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
        {title.length > titleLen ? truncate(title, titleLen) : title}
      </p>
    </div>
  );
}

export default MovieCard;
