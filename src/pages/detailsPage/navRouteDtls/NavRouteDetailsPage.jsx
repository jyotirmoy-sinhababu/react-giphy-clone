import React, { useContext } from 'react';
import { apiContext } from '../../../dataProvider/DataProvider';

import DtlsCard from '../../../components/cardComp/DtlsCard';
import BtnCnt from '../../../utils/btnCnt/BtnCnt';
import './navRouteStyle.css';

const NavRouteDetailsPage = () => {
  const { navData } = useContext(apiContext);
  return (
    <div className='navRoute-cnt'>
      <BtnCnt />
      <div className='navRouteSub-cnt'>
        {' '}
        {navData ? (
          navData.map((item) => {
            return (
              <div className='navRoute-card-cnt' key={item.id}>
                <DtlsCard item={item} />
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default NavRouteDetailsPage;
