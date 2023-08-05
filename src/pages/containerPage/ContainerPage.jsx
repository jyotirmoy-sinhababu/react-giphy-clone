import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

import { lazy, Suspense } from 'react';

import TrendingComp from '../../components/trendingComp/TrendingComp';
import EmojiComp from '../../components/emojiComp/EmojiComp';
import Loading from '../../utils/loadingComp/Loading';

const RandomGifs = lazy(() =>
  import('../../components/randomGifsComp/RandomGifs')
);

const ContainerPage = () => {
  const { setScrollActive, scrollActive } = useContext(apiContext);

  const handleScroll = () => {
    if (scrollActive) {
      setScrollActive(false);
    }
    if (!scrollActive) {
      setScrollActive(true);
    }
  };
  return (
    <div onScroll={handleScroll}>
      <div>
        <TrendingComp />
        <EmojiComp />
        <div>
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <RandomGifs />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ContainerPage;
