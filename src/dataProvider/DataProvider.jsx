import React, { useEffect, useState, useRef } from 'react';
import { createContext } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export const apiContext = createContext();

const DataProvider = ({ children }) => {
  const [scrollActive, setScrollActive] = useState(false);
  const [trendingGif, setTrendingGif] = useState();
  const [emoji, setEmoji] = useState();
  const [randomData, setRandomData] = useState();
  const [err, setErr] = useState(false);
  const [navData, setNavData] = useState();

  // search data cnt
  const [searchedData, setSearchedData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchTrendingData();
    fetchEmoji();
    fetchRandomData();
  }, []);
  ////////////////////////////////
  const ref = useRef();

  const fetchEmoji = async () => {
    try {
      await axios
        .get(
          'https://api.giphy.com/v2/emoji?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62&limit=35&offset=0'
        )
        .then((res) => {
          setEmoji(res.data.data);
        });
    } catch (err) {
      console.error(err);
    }
  };

  //trending data function

  const fetchTrendingData = async () => {
    try {
      await axios
        .get(
          'http://api.giphy.com/v1/gifs/trending?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62'
        )
        .then((res) => {
          setTrendingGif(res.data.data);
        });
    } catch (err) {
      console.error(err);
    }
  };

  //searchData function
  const searchData = async () => {
    try {
      if (ref.current) {
        await axios
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
    } catch (err) {
      console.error(err);
    }
  };
  const fetchRandomData = async (allgifs) => {
    try {
      await axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62&q=${allgifs}&limit=65&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        )
        .then((res) => {
          setRandomData(res.data.data);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const fetchNavData = async (abc) => {
    try {
      await axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62&q=${abc}&limit=65&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        )
        .then((res) => {
          setNavData(res.data.data);
          console.log(res.data.data);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <apiContext.Provider
      value={{
        trendingGif,
        scrollActive,
        emoji,
        searchedData,
        randomData,
        err,
        ref,
        navData,
        setScrollActive,
        searchData,
        fetchNavData,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

export default DataProvider;
