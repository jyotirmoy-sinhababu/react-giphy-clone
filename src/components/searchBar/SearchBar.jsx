import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import { VscSearch } from 'react-icons/vsc';

import Logo from '../logo/Logo';
import './searchBarStyle.css';

const SearchBar = () => {
  const { scrollActive, setScrollActive } = useContext(apiContext);

  const controlScroll = () => {
    setScrollActive(true);
  };

  return (
    <div onScroll={controlScroll}>
      {!scrollActive ? (
        <div className='searchBar-cnt'>
          <form>
            <input
              className='search-bar'
              type='text'
              placeholder='search all the stickers and gifs'
            />
            <button>
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
            <button>
              <VscSearch />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
