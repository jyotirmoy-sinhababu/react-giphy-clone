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
  const { searchedData } = useContext(apiContext);
  return (
    <>
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
    </>
  );
};

export default ContainerPage;
