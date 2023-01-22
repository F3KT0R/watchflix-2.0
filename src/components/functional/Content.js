import React from 'react';
import { IoMdClose } from 'react-icons/io';

const image_base = 'https://image.tmdb.org/t/p/original/';

export const Content = ({
  title,
  original_title,
  name,
  original_name,
  backdrop_path,
  poster_path,
  overview,
  release_date,
  first_air_date,
  callbackToggle,
  callbackPopup,
}) => {
  return (
    <div>
      <div className='grid grid-cols-10 grid-rows-6 pt-5'>
        <div className='grid col-span-8'>
          <div className='grid row-span-2'>
            <h1 className='font-bold text-xl'>{title ? title : name}</h1>
            <h5 className='pb-5'>
              {original_title ? original_title : original_name}
            </h5>
          </div>
          <div className='grid row-span-4 justify-self-center self-center'>
            <img
              src={
                (backdrop_path && image_base + backdrop_path) ||
                (poster_path && image_base + poster_path)
              }
            />
          </div>
        </div>

        <div className='grid col-span-2 p-4 bg-transparent bg-gradient-to-l from-black items-center justify-center text-center'>
          <div className='grid row-span-1 grid-flow-col justify-end'>
            <IoMdClose
              onClick={() => callbackToggle(false)}
              className=' cursor-pointer'
            />
          </div>
          <div className='grid row-span-5 grid-rows-5'>
            <div className='grid row-span-4'>
              <p>{overview && overview}</p>
              <p>{release_date ? release_date : first_air_date}</p>
            </div>
            <div className='grid row-span-1 justify-self-center self-center'>
              <li
                className='list-none cursor-pointer border-2 px-6 py-4 rounded border-gray-900 hover:bg-gray-900 transition-all select-none'
                onClick={() => callbackPopup(true)}
              >
                Trailer
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
