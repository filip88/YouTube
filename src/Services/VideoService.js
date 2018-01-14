import HttpService from './HttpService';

class VideoService extends HttpService {

  constructor() {
    super('/videos');
  }

  getVideos (params) {
    let data = {
      channel_id: params.channel,
      _page: params.page,
      _limit: params.limit
    };

    return this.get('', data).then((response) => {
      return response;
    });
  }
}

let videoService = new VideoService();
export default videoService;
