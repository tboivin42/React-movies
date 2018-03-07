import React from 'react';
import VideoListItem from '../Components/Video-list-item';

const VideoList = (props) => {

  const { moviesList } = props;

  function receiveCallBack(movie) {
    props.callback(movie);
  }

  return (
    <div>
      <ul>
        {
          moviesList.map(movie => {
            return <VideoListItem key={ movie.id } movie={ movie } callback={ receiveCallBack } />
          })
        }
      </ul>
    </div>
  );
}

export default VideoList;