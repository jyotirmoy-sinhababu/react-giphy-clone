import React from 'react';
import { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import './emojiCompStyle.css';

import {
  BsEmojiSunglasses,
  BsFillEmojiExpressionlessFill,
} from 'react-icons/bs';
import EmojiCard from '../cardComp/EmojiCard';

const EmojiComp = () => {
  const { emoji } = useContext(apiContext);

  return (
    <div className='emoji-cnt'>
      <div className='emojiBtn-cnt'>
        <button className='emojiBtn'>
          <BsEmojiSunglasses />
          Emojis
        </button>
      </div>
      <div className='emojiCompCard-cnt'>
        {emoji ? (
          emoji?.map((item) => {
            return (
              <div className='emojiCompCard' key={item.id}>
                <EmojiCard item={item} />
              </div>
            );
          })
        ) : (
          <div>
            <BsFillEmojiExpressionlessFill /> No data
          </div>
        )}
      </div>
    </div>
  );
};

export default EmojiComp;
