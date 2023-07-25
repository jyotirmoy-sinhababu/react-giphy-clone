import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

import axios from 'axios';

export const apiContext = createContext();

const DataProvider = ({ children }) => {
  const [scrollActive, setScrollActive] = useState(false);
  const [trendingGif, setTrendingGif] = useState();

  useEffect(() => {
    axios
      .get(
        'http://api.giphy.com/v1/gifs/trending?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62'
      )
      .then((res) => {
        console.log(res.data.data);
        setTrendingGif(res.data.data);
      });
  }, []);

  return (
    <apiContext.Provider value={{ trendingGif, scrollActive, setScrollActive }}>
      {children}
    </apiContext.Provider>
  );
};

export default DataProvider;
