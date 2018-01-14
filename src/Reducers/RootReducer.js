import { combineReducers } from 'redux';
import channel from './ChannelReducer';

const rootReducer = combineReducers({
  channel
});

export default rootReducer;
