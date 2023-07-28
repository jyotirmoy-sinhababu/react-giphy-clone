import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import { BiTrendingUp } from 'react-icons/bi';
import Card from '../cardComp/Card';

import './trendingStyle.css';

const TrendingComp = () => {
  const { trendingGif } = useContext(apiContext);
  return (
    <div className='trending-cnt'>
      <div className='trendingBtn-cnt'>
        {' '}
        <button className='trendingBtn'>
          <BiTrendingUp /> Trending
        </button>
      </div>
      <div className='trendingCard-cnt'>
        {' '}
        {trendingGif
          ? trendingGif?.map((item) => {
              return (
                <div className='trendingCard' key={item.id}>
                  <Card item={item} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default TrendingComp;
