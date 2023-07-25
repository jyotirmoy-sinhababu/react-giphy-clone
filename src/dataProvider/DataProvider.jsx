import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

import axios from 'axios';

export const apiContext = createContext();

const DataProvider = ({ children }) => {
  const [scrollActive, setScrollActive] = useState(false);
  const [trendingGif, setTrendingGif] = useState();
  const [inputSearch, setInputSearch] = useState();

  useEffect(() => {
    fetchTrendingData();
  }, []);

  //trending data function

  const fetchTrendingData = () => {
    axios
      .get(
        'http://api.giphy.com/v1/gifs/trending?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62'
      )
      .then((res) => {
        console.log(res.data.data);
        setTrendingGif(res.data.data);
      });
  };

  //searchData function

  const searchData = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62&q=${bithday}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <apiContext.Provider
      value={{
        trendingGif,
        scrollActive,
        inputSearch,
        setScrollActive,
        setInputSearch,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

export default DataProvider;
