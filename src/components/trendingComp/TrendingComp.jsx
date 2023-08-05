import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import { BiTrendingUp } from 'react-icons/bi';
import Card from '../cardComp/Card';

import { useNavigate } from 'react-router-dom';

import { BsFillEmojiExpressionlessFill } from 'react-icons/bs';
import './trendingStyle.css';

const TrendingComp = () => {
  const { trendingGif } = useContext(apiContext);

  const navigate = useNavigate();

  const trendingBtnFunction = () => {
    navigate('/trendDtls');
  };

  return (
    <div className='trending-cnt'>
      <div className='trendingBtn-cnt'>
        {' '}
        <button onClick={trendingBtnFunction} className='trendingBtn'>
          <BiTrendingUp /> Trending
        </button>
      </div>
      <div className='trendingCard-cnt'>
        {' '}
        {trendingGif ? (
          trendingGif?.map((item) => {
            return (
              <div className='trendingCard' key={item.id}>
                <Card item={item} />
              </div>
            );
          })
        ) : (
          <div>
            <BsFillEmojiExpressionlessFill /> No data
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingComp;
