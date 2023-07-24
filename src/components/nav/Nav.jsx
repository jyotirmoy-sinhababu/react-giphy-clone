import React from 'react';

import './navStyle.css';

import Logo from '../logo/Logo';
import { MdAccountBox } from 'react-icons/md';

const Nav = () => {
  return (
    <div className='nav-cnt'>
      <div className='nav-logo-cnt'>
        <Logo />
        <p>GIPHY</p>
      </div>
      <div>
        <button>Reactions</button>
        <button>Entertainment</button>
        <button>Sports</button>
        <button>Artists</button>
      </div>
      <div>
        <button>Upload</button>
        <button>Create</button>
      </div>
      <div>
        <button>
          <MdAccountBox />
          Log in
        </button>
      </div>
    </div>
  );
};

export default Nav;
