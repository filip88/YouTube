import React from 'react';
import {Link} from 'react-router-dom';
//scss
import './Video.scss';

const Video = ({video}) => {

  const watchVideo = (event) => {
    event.target.nextSibling.getElementsByTagName('a')[0].click();
  }

  return (
    <div>
      <video src={video.url} type="video/mp4" className="video-item" onClick={watchVideo}></video>
      <div className="title-link"><Link to={"/watch-video/" + video.id}>{video.title}</Link></div>
    </div>
  )
}

export default Video;
