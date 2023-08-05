import React, { useState, useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import { useNavigate } from 'react-router-dom';

import './navStyle.css';

import Logo from '../logo/Logo';
import { MdAccountBox } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const { fetchNavData } = useContext(apiContext);
  const [burgerBtnActive, setBurgerBtnActive] = useState(false);

  const navigate = useNavigate();

  const handleBurgerBtn = () => {
    !burgerBtnActive ? setBurgerBtnActive(true) : setBurgerBtnActive(false);
  };
  return (
    <>
      {' '}
      <div className='nav-cnt'>
        <div className='nav-logo-cnt'>
          <Logo />
          <p className='nav-logo-para'>GIPHY CLONE</p>
        </div>
        <div className='nav-btns-cnt'>
          <button
            onClick={(reactions) => {
              fetchNavData(reactions);
              navigate('./navRoute');
            }}
            className='nav-btns'
          >
            Reactions
          </button>
          <button
            onClick={(entertainment) => {
              fetchNavData(entertainment);
              navigate('./navRoute');
            }}
            className='nav-btns'
          >
            Entertainment
          </button>
          <button
            onClick={(stickers) => {
              fetchNavData(stickers);
              navigate('./navRoute');
            }}
            className='nav-btns'
          >
            Stickers
          </button>
          <button
            onClick={(sports) => {
              fetchNavData(sports);
              navigate('./navRoute');
            }}
            className='nav-btns'
          >
            Sports
          </button>
          <button
            onClick={(artists) => {
              fetchNavData(artists);
              navigate('./navRoute');
            }}
            className='nav-btns'
          >
            Artists
          </button>
        </div>
        <div className='nav-2ndBtns-cnt'>
          <button className='nav-2ndBtn'>Upload</button>
          <button className='nav-2ndBtn'>Create</button>
        </div>
        <div className='nav-logInBtns'>
          <button className='nav-logIn-btn'>
            <MdAccountBox />
            Log in
          </button>
        </div>
      </div>
      <div className='nav-mobile-view'>
        <div className='mobileView-logo-cnt'>
          <Logo />
          <p className='navMob-logo-para'>GIPHY </p>
        </div>
        <div className='burgerBtn-cnt'>
          <button className='burgerBtn' onClick={handleBurgerBtn}>
            <GiHamburgerMenu />
          </button>
        </div>

        {burgerBtnActive ? (
          <div className='nav-mobileBtn-cnt'>
            <div className='mobileBtn-cnt'>
              <button className='mobileBtn'>Reactions</button>
              <button className='mobileBtn'>Entertainment</button>
              <button className='mobileBtn'>Sports</button>
              <button className='mobileBtn'>Artists</button>
              <button className='mobileBtn'>Upload</button>
              <button className='mobileBtn'>Create</button>
            </div>
            <div className='mobile-logInBtn-cnt'>
              <button className='mobileBtn-logIn'>
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
