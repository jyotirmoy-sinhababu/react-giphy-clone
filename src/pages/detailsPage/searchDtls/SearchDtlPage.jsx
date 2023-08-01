import React, { useContext } from 'react';
import { apiContext } from '../../../dataProvider/DataProvider';

import BtnCnt from '../../../utils/btnCnt/BtnCnt';
import DtlsCard from '../../../components/cardComp/DtlsCard';

const SearchDtlPage = () => {
  const { searchedData } = useContext(apiContext);
  return (
    <div>
      <BtnCnt />
      <div>
        {searchedData
          ? searchedData?.map((item) => {
              return (
                <div key={item.id}>
                  <DtlsCard item={item} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default SearchDtlPage;
