import videoService from '../Services/VideoService';

export const LOAD_CHANNEL_DATA = 'LOAD_CHANNEL_DATA';

export function loadChannelData(channel=1, page=1, limit=12) {
  return (dispatch) => {
    return videoService.getVideos({channel,page,limit}).then((response) => {
      dispatch(
        loadChannelDataSuccess({
          channel,
          page,
          limit,
          videos: response.data,
          total: Number(response.headers['x-total-count'])}
        ));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadChannelDataSuccess(channel) {
  return {type: 'LOAD_CHANNEL_DATA', channel};
}
