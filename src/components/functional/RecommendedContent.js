import React from 'react';

const image_base = 'https://image.tmdb.org/t/p/original/';

export const RecommendedContent = ({ title, name, backdrop_path }) => {
  return (
    <div>
      <img src={backdrop_path && image_base + backdrop_path} />
      <p>{title ? title : name}</p>
    </div>
  );
};
