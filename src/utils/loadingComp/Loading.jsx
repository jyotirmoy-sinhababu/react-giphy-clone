import React from 'react';

import './loadingStyle.css';
import { BiLoaderCircle } from 'react-icons/bi';

const Loading = () => {
  return (
    <div className='loader-cnt'>
      <p className='loading-txt'>
        <BiLoaderCircle />
      </p>
    </div>
  );
};

export default Loading;
