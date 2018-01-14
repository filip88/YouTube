import React from 'react';
import { Link } from 'react-router-dom';
// scss
import './NavigationMenu.scss';

const NavigationMenu = () => {
  return (
    <div className="container navigation-menu">
      <div className="row">
        <div className="col-xl-12 col-12">
          <img src="http://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh-320-80.jpg" height="50" />
          <Link to="/channel/3" className="nav-item app-link">Procedures</Link>
          <Link to="/channel/2" className="nav-item app-link">Social</Link>
          <Link to="/" className="nav-item app-link">Corporate</Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
