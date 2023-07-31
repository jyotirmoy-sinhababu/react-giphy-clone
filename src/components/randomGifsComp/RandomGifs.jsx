import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import './randomGifStyle.css';

const RandomGifs = () => {
  const { randomData } = useContext(apiContext);

  return (
    <div className='mainRandom-cnt'>
      {' '}
      <div className='randomGif-cnt'>
        {randomData
          ? randomData?.map((item) => {
              return (
                <div className='randomGif-imgCnt' key={item.id}>
                  <img
                    className='randomGifImgs'
                    src={item.images.fixed_height.url}
                    alt=''
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default RandomGifs;
