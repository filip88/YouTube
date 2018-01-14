import React from 'react';
import videoService from '../../Services/VideoService';
//SCSS
import './WatchVideo.scss';

export default class WatchVideo extends React.Component {

  constructor() {
    super();
    this.state = {video: {}};
  }

  componentWillMount() {
    videoService.get('', this.props.match.params).then((response)=> {
      this.setState({ video: response.data[0] });
    });
  }

  render() {
    return (
      <div className="container watch-video-page">
        <div className="row">
          <video className="col-xl-12 col-12" src={this.state.video.url} type="video/mp4" height="500px" controls />
        </div>
        <div className="row">
          <div className="col-xl-12 col-12 video-title padding-15">{this.state.video.title}</div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-12 padding-15">{this.state.video.description}</div>
        </div>
      </div>
    )
  }
}
