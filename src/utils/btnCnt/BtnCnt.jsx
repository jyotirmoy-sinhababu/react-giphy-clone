import React from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';

import './btnStyle.css';

const BtnCnt = () => {
  return (
    <div className='reactBtn-cnt'>
      <button className='reactBtn'>
        <TiArrowBackOutline />
      </button>
    </div>
  );
};

export default BtnCnt;
