import React, { Component } from 'react';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';
import { Switch, Route } from 'react-router-dom';
import ChannelPage from './Pages/ChannelPage/ChannelPage';
import WatchVideo from './Pages/WatchVideo/WatchVideo';

// scss
import './Styles/styles.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container-fluid">
          <NavigationMenu />
        </div>
        <div className="container-fluid">
          <Switch>
            <Route path='/' exact component={ChannelPage} />
            <Route path='/channel/:id' exact component={ChannelPage} />
            <Route path="/watch-video/:id" component={WatchVideo} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
