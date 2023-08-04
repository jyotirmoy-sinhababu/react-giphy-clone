import React, { useEffect, useState, useRef } from 'react';
import { createContext } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export const apiContext = createContext();

const DataProvider = ({ children }) => {
  const [scrollActive, setScrollActive] = useState(false);
  const [trendingGif, setTrendingGif] = useState();
  const [emoji, setEmoji] = useState();
  // const [inputData, setInputData] = useState('');
  const [randomData, setRandomData] = useState();
  const [err, setErr] = useState(false);

  // search data cnt
  const [searchedData, setSearchedData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchTrendingData();
    fetchEmoji();
    fetchRandomData();
  }, []);
  // console.log(inputData.searchedData);
  ////////////////////////////////
  const ref = useRef();

  const fetchEmoji = () => {
    axios
      .get(
        'https://api.giphy.com/v2/emoji?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62&limit=35&offset=0'
      )
      .then((res) => {
        setEmoji(res.data.data);
      });
  };

  //trending data function

  const fetchTrendingData = () => {
    axios
      .get(
        'http://api.giphy.com/v1/gifs/trending?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62'
      )
      .then((res) => {
        // console.log(res.data.data);
        setTrendingGif(res.data.data);
      });
  };

  //searchData function
  const searchData = () => {
    if (ref.current) {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62&q=${ref.current}&limit=55&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        )
        .then((res) => {
          if (res.data.meta.status == 200) {
            console.log(res.data);
            setSearchedData(res.data.data);
            navigate('./searchDtls');
          }
          if (res.data.meta.status != 200) {
            setErr(false);
          }
        });
    }
  };
  const fetchRandomData = (allgifs) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62&q=${allgifs}&limit=65&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      )
      .then((res) => {
        setRandomData(res.data.data);
      });
  };

  return (
    <apiContext.Provider
      value={{
        trendingGif,
        scrollActive,
        // inputData,
        emoji,
        searchedData,
        randomData,
        err,
        ref,
        setScrollActive,
        // setInputData,
        searchData,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

export default DataProvider;
