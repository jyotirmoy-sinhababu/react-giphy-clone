import React from 'react';

import { LiaSearchSolid } from 'react-icons/li';
import Logo from '../logo/Logo';

const SearchBar = () => {
  return (
    <>
      {' '}
      <form>
        <input
          className='search-bar'
          type='text'
          placeholder='search all the stickers and gifs'
        />
        <button>
          <LiaSearchSolid />
        </button>
      </form>
      <div>
        <Logo />
        <form>
          <input
            className='search-bar'
            type='text'
            placeholder='search all the stickers and gifs'
          />
          <button>
            <LiaSearchSolid />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
