import React from 'react';

import Logo from '../logo/Logo';
import { MdAccountBox } from 'react-icons/md';

const Nav = () => {
  return (
    <div>
      <div>
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
