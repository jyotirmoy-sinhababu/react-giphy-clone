import React, { useContext } from 'react';

import { apiContext } from '../../../dataProvider/DataProvider';

import DtlsCard from '../../../components/cardComp/DtlsCard';
import BtnCnt from '../../../utils/btnCnt/BtnCnt';

import './emojiDtlStyle.css';

const EmojiDetailsPage = () => {
  const { emoji } = useContext(apiContext);
  return (
    <div className='emojiDtl-cnt'>
      {' '}
      <BtnCnt />
      <div className='emojiDtl-card-cnt'>
        {emoji ? (
          emoji?.map((item) => {
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

export default EmojiDetailsPage;
