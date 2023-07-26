import React, { useState } from 'react';

import './navStyle.css';

import Logo from '../logo/Logo';
import { MdAccountBox } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const [burgerBtnActive, setBurgerBtnActive] = useState(false);

  const handleBurgerBtn = () => {
    !burgerBtnActive ? setBurgerBtnActive(true) : setBurgerBtnActive(false);
  };
  return (
    <>
      {' '}
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
      <div className='nav-mobile-view'>
        <div>
          <Logo />
          <p>GIPHY</p>
        </div>
        <div className='burgerBtn-cnt'>
          <button onClick={handleBurgerBtn}>
            <GiHamburgerMenu />
          </button>
        </div>

        {burgerBtnActive ? (
          <div className='nav-mobileBtn-cnt'>
            <div className='mobileBtn-cnt'>
              <button>Reactions</button>
              <button>Entertainment</button>
              <button>Sports</button>
              <button>Artists</button>
              <button>Upload</button>
              <button>Create</button>
            </div>
            <div className='mobile-logInBtn-cnt'>
              <button>
                <MdAccountBox />
                Log in
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Nav;
