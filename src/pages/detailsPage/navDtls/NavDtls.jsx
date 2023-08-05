import React, { useContext } from 'react';
import { apiContext } from '../../../dataProvider/DataProvider';

import { BsFillEmojiExpressionlessFill } from 'react-icons/bs';

import DtlsCard from '../../../components/cardComp/DtlsCard';

const NavDtls = () => {
  const { navData } = useContext(apiContext);
  return (
    <div>
      {navData ? (
        navData?.map((item) => {
          return (
            <div key={item.key}>
              <DtlsCard item={item} />
            </div>
          );
        })
      ) : (
        <div>
          <BsFillEmojiExpressionlessFill /> No data
        </div>
      )}
    </div>
  );
};

export default NavDtls;
