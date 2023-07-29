import React, { useContext } from 'react';
import { apiContext } from '../../../dataProvider/DataProvider';

import { TiArrowBack } from 'react-icons/ti';

import Card from '../../../components/cardComp/Card';

const TrendingDetailsPage = () => {
  const { trendingGif } = useContext(apiContext);
  return (
    <div>
      <div>
        <button>
          <TiArrowBack />
        </button>
      </div>
      <div>
        {trendingGif ? (
          trendingGif?.map((item) => {
            return (
              <div key={item.id}>
                <Card item={item} />
              </div>
            );
          })
        ) : (
          <div>
            <p>No data</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingDetailsPage;
