import React from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const VideoListItem = (props) => {

  const { movie } = props;

  function handleOnClick () {
    props.callback(movie);
  }

  return (
    <li className="list-group-item" onClick={handleOnClick}>
      <div className="media">
        <div className="media-left">
          <img className="media-object img-rounded"height="100px" width="100px" src={`${IMG_BASE_URL}${movie.poster_path}`} />
        </div>
        <div className="media-body">
          <h6 className="title_list_item" >{ movie.title }</h6>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;