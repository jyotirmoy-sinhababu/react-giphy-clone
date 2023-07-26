import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import { VscSearch } from 'react-icons/vsc';

import Logo from '../logo/Logo';
import './searchBarStyle.css';

const SearchBar = () => {
  const { inputData, scrollActive, setScrollActive, setInputData, searchData } =
    useContext(apiContext);

  const controlScroll = () => {
    setScrollActive(true);
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  // console.log(inputData);

  return (
    <div onScroll={controlScroll}>
      {!scrollActive ? (
        <div className='searchBar-cnt'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchData();
            }}
          >
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              name='searchedData'
              className='search-bar'
              type='text'
              placeholder='search all the stickers and gifs'
            />
            <button type='submit'>
              <VscSearch />
            </button>
          </form>
        </div>
      ) : (
        <div className='searchBar-cnt'>
          <Logo />
          <form>
            <input
              onChange={() => {
                handleChange();
              }}
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
