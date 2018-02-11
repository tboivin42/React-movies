import React from 'react';
import VideoListItem from '../Components/Video-list-item';

const VideoList = ({ moviesList }) => {
  console.log(moviesList);
  return (
    <div>
      <ul>
        {
          moviesList.map(movie => {
            return <VideoListItem key={ movie.id } movie={ movie } />
          })
        }
      </ul>
    </div>
  );
}

export default VideoList;