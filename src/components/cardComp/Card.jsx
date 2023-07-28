import React from 'react';

import './cardStyle.css';

const Card = ({ item }) => {
  return (
    <div>
      <img
        className='trending-gifs'
        src={item.images.fixed_height.url}
        alt=''
      />
    </div>
  );
};

export default Card;
