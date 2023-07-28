import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import { BiTrendingUp } from 'react-icons/bi';
import Card from '../cardComp/Card';

const TrendingComp = () => {
  const { trendingGif } = useContext(apiContext);
  return (
    <div>
      <div>
        {' '}
        <button>
          <BiTrendingUp /> Trending
        </button>
      </div>
      {trendingGif
        ? trendingGif?.map((item) => {
            return (
              <div key={item.id}>
                <Card item={item} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default TrendingComp;
