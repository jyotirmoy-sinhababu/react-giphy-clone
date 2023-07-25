import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import { VscSearch } from 'react-icons/vsc';

import Logo from '../logo/Logo';
import './searchBarStyle.css';

const SearchBar = () => {
  const { inputSearch, scrollActive, setScrollActive, setInputSearch } =
    useContext(apiContext);

  const controlScroll = () => {
    setScrollActive(true);
  };

  const handleClick = () => {
    setInputSearch({ ...inputSearch, [e.target.name]: e.target.value });
  };

  return (
    <div onScroll={controlScroll}>
      {!scrollActive ? (
        <div className='searchBar-cnt'>
          <form>
            <input
              name='searchedData'
              className='search-bar'
              type='text'
              placeholder='search all the stickers and gifs'
            />
            <button onClick={handleClick}>
              <VscSearch />
            </button>
          </form>
        </div>
      ) : (
        <div className='searchBar-cnt'>
          <Logo />
          <form>
            <input
              className='search-bar'
              type='text'
              placeholder='search all the stickers and gifs'
            />
            <button onClick={handleClick}>
              <VscSearch />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
