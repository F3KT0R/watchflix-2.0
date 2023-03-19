import React from 'react';
import f3_logo from '../../assets/images/f3.png';

export const Footer = () => {
  return (
    <div className='grid pt-20 justify-center bg-transparent bg-gradient-to-l from-black'>
      <div className='grid grid-cols-2'>
        <p className='grid px-3'>Designed and developed by:</p>
        <a href='https://tibor-balint.netlify.app/' target='_blank'>
          <img src={f3_logo} className='grid pb-1 h-9' />
        </a>
      </div>
    </div>
  );
};
