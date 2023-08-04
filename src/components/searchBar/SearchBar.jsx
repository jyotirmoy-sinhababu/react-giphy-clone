import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import { LiaSearchSolid } from 'react-icons/lia';

import Logo from '../logo/Logo';
import './searchBarStyle.css';

const SearchBar = () => {
  const { scrollActive, setScrollActive, searchData, err, ref } =
    useContext(apiContext);

  const controlScroll = () => {
    setScrollActive(true);
  };

  return (
    <div onScroll={controlScroll}>
      {!scrollActive ? (
        <div className='searchBar-cnt'>
          <form
            className='search-form'
            onSubmit={(e) => {
              e.preventDefault();
              searchData();
            }}
          >
            <input
              onChange={(e) => {
                ref.current = e.target.value;
              }}
              name='searchedData'
              className={`search-bar ${err ? 'notOk' : 'ok'}`}
              type='text'
              placeholder='search all the stickers and gifs'
            />
            <button name='form-button' className='search-btn' type='submit'>
              <LiaSearchSolid />
            </button>
          </form>
        </div>
      ) : (
        <div className='searchBar-cnt'>
          <Logo />
          <form>
            <input
              onChange={(e) => {
                ref.current = e.target.value;
              }}
              value={ref.current}
              className='search-bar'
              type='text'
              placeholder='search all the stickers and gifs'
            />
            <button>
              <LiaSearchSolid />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
