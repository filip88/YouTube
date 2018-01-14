import React from 'react'
import Video from '../Video/Video';

const ListVideos = ({videos}) => {
  let row = [];
  let rowVideos = [];

  for(let i=0; i<videos.length; i+=4) {
    for(let j=i; j<i+4 && j<videos.length; j++) {
      rowVideos.push(
        <div key={videos[j].id} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 center">
          <Video video={videos[j]}/>
        </div>);
    }
    row.push(<div key={i} className="row">{rowVideos}</div>);
    rowVideos = [];
  }
  return row;
}

export default ListVideos;
