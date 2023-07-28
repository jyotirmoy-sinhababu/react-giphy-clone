import React from 'react';

import Nav from '../../components/nav/Nav';
import SearchBar from '../../components/searchBar/SearchBar';
import TrendingComp from '../../components/trendingComp/TrendingComp';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <SearchBar />
      <TrendingComp />
    </div>
  );
};

export default LandingPage;
