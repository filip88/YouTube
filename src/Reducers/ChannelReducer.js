import * as types from '../Actions/ChannelActions';
import initialState from './InitialState';

export default function channelReducer(state = initialState.channel, action) {
  switch(action.type) {
    case types.LOAD_CHANNEL_DATA:
      return action.channel
    default:
      return state;
  }
}
