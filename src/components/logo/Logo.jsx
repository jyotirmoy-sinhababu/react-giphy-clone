import React from 'react';

import './logoStyle.css';

import { SiGiphy } from 'react-icons/si';

const Logo = () => {
  return (
    <div className='logo-cnt'>
      <p className='logo'>
        <SiGiphy />
      </p>
    </div>
  );
};

export default Logo;
