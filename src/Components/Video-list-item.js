import React from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const VideoListItem = ({movie}) => {
  return (
    <li>
      <img height="10%" width="10%" src={`${IMG_BASE_URL}${movie.poster_path}`} />
      { movie.title }
    </li>
  )
}

export default VideoListItem;