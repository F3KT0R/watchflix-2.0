import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

export const Popup = ({ content, callback }) => {
  const [trailerUrl, setTrailerUrl] = useState('');

  const opts = {
    height: '500px',
    width: '1000px',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    trailerUrl !== ''
      ? setTrailerUrl('')
      : movieTrailer(content.title || content.name)
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
          })
          .catch((error) => console.log(error));
  }, [content]);

  return (
    <div className='grid fixed h-full w-full justify-center items-center bg-black bg-opacity-70 z-10'>
      <div className='grid bg-classy-dark px-10 pt-5 pb-10 bg-transparent bg-gradient-to-l from-black'>
        <IoMdClose
          onClick={() => callback(false)}
          className='relative left-full cursor-pointer'
        />
        <h1 className='font-bold pb-11 text-xl shadow-black'>
          {content.title ? content.title : content.name}
        </h1>
        {trailerUrl ? (
          <YouTube videoId={trailerUrl} opts={opts} />
        ) : (
          <div>
            <h2>
              Sorry, we couldn't find a YouTube Trailer for your selected title.
            </h2>
            <h2>Please check out another one of our videos.</h2>
          </div>
        )}
      </div>
    </div>
  );
};
