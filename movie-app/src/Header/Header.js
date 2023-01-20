import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = () => {

  return (
    <div className="header">
      
      <div className="logo"><Link to="/">Movie App </Link></div>
     
      
      <div className="user-image">
        <Link to="/login">user</Link>
      </div>
    </div>
  );
};

export default Header;
