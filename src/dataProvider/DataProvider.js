import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

import axios from 'axios';

export const apiProvider = createContext();

const DataProvider = ({ children }) => {
  useEffect(() => {
    axios
      .get(
        'http://api.giphy.com/v1/gifs/trending?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62'
      )
      .then((res) => {
        console.log(res.data);
      });
  });

  return <apiProvider.Provider value={{}}>{children}</apiProvider.Provider>;
};

export default DataProvider;
