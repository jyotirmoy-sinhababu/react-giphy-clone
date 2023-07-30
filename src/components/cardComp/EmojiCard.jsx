import React from 'react';

const EmojiCard = ({ item }) => {
  return (
    <div className='emojiCard-cnt'>
      <img className='emojiImg' src={item.images.fixed_height.url} alt='' />
    </div>
  );
};

export default EmojiCard;
