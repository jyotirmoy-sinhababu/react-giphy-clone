import React, { useContext } from 'react';
import { apiContext } from '../../../dataProvider/DataProvider';

import { TiArrowBack } from 'react-icons/ti';
import './trendingDtlsStyle.css';

import Card from '../../../components/cardComp/Card';

const TrendingDetailsPage = () => {
  const { trendingGif } = useContext(apiContext);
  return (
    <div className='trndDtl-cnt'>
      <div className='trndDtlBtn-cnt'>
        <button className='trndDtlBtn'>
          <TiArrowBack />
        </button>
      </div>
      <div className='trndDtl-card-cnt'>
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
