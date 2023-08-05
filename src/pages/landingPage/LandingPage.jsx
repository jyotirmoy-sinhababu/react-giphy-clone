import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import Nav from '../../components/nav/Nav';
import SearchBar from '../../components/searchBar/SearchBar';
import { Outlet } from 'react-router-dom';
import Loading from '../../utils/loadingComp/Loading';

const LandingPage = () => {
  const { emoji, trendingGif, setScrollActive } = useContext(apiContext);
  return (
    <div>
      <div>
        <Nav />
        <SearchBar />
      </div>
      {emoji && trendingGif ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default LandingPage;
