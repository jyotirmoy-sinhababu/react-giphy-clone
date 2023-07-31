import React, { useContext } from 'react';
import { apiContext } from '../../../dataProvider/DataProvider';

import './trendingDtlsStyle.css';

import DtlsCard from '../../../components/cardComp/DtlsCard';
import BtnCnt from '../../../utils/btnCnt/BtnCnt';

const TrendingDetailsPage = () => {
  const { trendingGif } = useContext(apiContext);
  return (
    <div className='trndDtl-cnt'>
      <BtnCnt />
      <div className='trndDtl-card-cnt'>
        {trendingGif ? (
          trendingGif?.map((item) => {
            return (
              <div key={item.id}>
                <DtlsCard item={item} />
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
