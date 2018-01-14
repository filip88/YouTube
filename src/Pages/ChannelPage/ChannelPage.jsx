import React from 'react';
import { connect } from 'react-redux';
import { loadChannelData } from '../../Actions/ChannelActions';
import ListVideos from '../../Components/ListVideos/ListVideos';
import ReactPaginate from 'react-paginate';
// scss
import './ChannelPage.scss';

const VIDEOS_PER_PAGE = 12;

class ChannelPage extends React.Component {

  constructor() {
    super();
    // Bindings
    this.changePage = this.changePage.bind(this);
    // State
    this.state = {
      channelVideos: [],
      page: 1,
      totalVideos: 0,
      channel: 0
    };
  }

  changePage(event) {
    this.props.loadChannelData(1,event.selected+1,VIDEOS_PER_PAGE);
  }

  render() {
    let channel = this.props.channel,
        paramId = Number(this.props.match.params.id) || 1;

    if (paramId !== channel.channel) {
      this.props.loadChannelData(paramId,1,VIDEOS_PER_PAGE);
    }
    return (
      <div className="container channel-page">
        <ListVideos videos={channel.videos} />
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={channel.total/VIDEOS_PER_PAGE}
                       onPageChange={this.changePage}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {channel: state.channel};
}

function mapDispatchToProps(dispatch) {
  return { loadChannelData: (channel,page,limit) => { dispatch(loadChannelData(channel,page,limit)); } }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChannelPage)
