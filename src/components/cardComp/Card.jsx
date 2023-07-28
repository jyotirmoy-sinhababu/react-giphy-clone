import React from 'react';

const Card = ({ item }) => {
  return (
    <div>
      <img src={item.images.fixed_height.url} alt='' />
    </div>
  );
};

export default Card;
