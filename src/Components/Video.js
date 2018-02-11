import React from 'react';

const BASE_URL = "https://youtube.com/embed/";

const Video = ({ videoId }) => {
  console.log(videoId);
  return (
    <div>
      <iframe src={`${BASE_URL}${videoId}`}/>
    </div>
  )
}

export default Video;