import React from 'react';

import './cardStyle.css';

const DtlsCard = ({ item }) => {
  return (
    <div className='dtl-cnt'>
      <img className='dtl-gifs' src={item.images.fixed_height.url} alt='' />
    </div>
  );
};

export default DtlsCard;
