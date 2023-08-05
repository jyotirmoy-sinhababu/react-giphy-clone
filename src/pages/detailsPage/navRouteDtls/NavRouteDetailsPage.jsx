import React, { useContext } from 'react';
import { apiContext } from '../../../dataProvider/DataProvider';

import DtlsCard from '../../../components/cardComp/DtlsCard';

const NavRouteDetailsPage = () => {
  const { navData } = useContext(apiContext);
  return (
    <div className='searchDtl-cnt'>
      {navData ? (
        navData.map((item) => {
          return (
            <div className='searchDtl-card-cnt' key={item.id}>
              <DtlsCard item={item} />
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default NavRouteDetailsPage;
