import React, { useContext } from 'react';
import { apiContext } from '../../../dataProvider/DataProvider';

import BtnCnt from '../../../utils/btnCnt/BtnCnt';
import DtlsCard from '../../../components/cardComp/DtlsCard';

import './searchDtlStyle.css';
import { BsFillEmojiExpressionlessFill } from 'react-icons/bs';

const SearchDtlPage = () => {
  const { searchedData } = useContext(apiContext);
  return (
    <div className='searchDtl-cnt'>
      <BtnCnt />
      <div className='searchDtl-card-cnt'>
        {searchedData ? (
          searchedData?.map((item) => {
            return (
              <div key={item.id}>
                <DtlsCard item={item} />
              </div>
            );
          })
        ) : (
          <div className='noData'>
            <BsFillEmojiExpressionlessFill /> No data
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDtlPage;
