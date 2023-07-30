import React from 'react';
import { lazy, Suspense } from 'react';

import TrendingComp from '../../components/trendingComp/TrendingComp';
import EmojiComp from '../../components/emojiComp/EmojiComp';
import RandomGifs from '../../components/randomGifsComp/RandomGifs';

const ContainerPage = () => {
  return (
    <div>
      <TrendingComp />
      <EmojiComp />
      <RandomGifs />
    </div>
  );
};

export default ContainerPage;
