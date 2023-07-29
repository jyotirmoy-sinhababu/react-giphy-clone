import React from 'react';

import './artistStyle.css';
import { AiFillThunderbolt } from 'react-icons/ai';

import { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

const ArtistComp = () => {
  const { artist } = useContext(apiContext);

  return (
    <div>
      <div>
        <button>
          <AiFillThunderbolt />
          <p>Artists</p>
        </button>
      </div>
    </div>
  );
};

export default ArtistComp;
