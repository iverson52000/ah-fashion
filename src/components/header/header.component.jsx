import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/facebook_profile_image.svg';
import './header.styles.scss';

const Header = () => (
  <div className = 'header'>
    <Link className = 'logo-container' to = '/'>
      <Logo className = 'logo' style={{height: 90, width: 90}}/>
    </Link>
    <div className = 'options'>
      <Link className = 'option' to = '/shop'>
        SHOP
      </Link>
      <Link className = 'option' to = '/shop'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;