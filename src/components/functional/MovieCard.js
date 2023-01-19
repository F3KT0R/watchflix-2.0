import React from 'react';

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
  return (
    <div>
      <img
        src={
          poster_path ? image_base + poster_path : image_base + backdrop_path
        }
      />
    </div>
  );
}

export default MovieCard;
