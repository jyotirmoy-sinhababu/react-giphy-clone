import React from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';

import { useNavigate } from 'react-router-dom';

import './btnStyle.css';

const BtnCnt = () => {
  const navigate = useNavigate();

  const homeBackBtn = () => {
    navigate('/');
  };

  return (
    <div className='reactBtn-cnt'>
      <button onClick={homeBackBtn} className='reactBtn'>
        <TiArrowBackOutline />
      </button>
    </div>
  );
};

export default BtnCnt;
