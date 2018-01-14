import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from './Store/ConfigureStore';
import { loadChannelData } from './Actions/ChannelActions';

let store = configureStore();

store.dispatch(loadChannelData());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/" className="app">
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
