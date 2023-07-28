import React from 'react';

import Nav from '../../components/nav/Nav';
import SearchBar from '../../components/searchBar/SearchBar';
import { Outlet } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <SearchBar />
      <Outlet />
    </div>
  );
};

export default LandingPage;
