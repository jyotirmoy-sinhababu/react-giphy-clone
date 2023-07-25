import React from 'react';

import { BiTrendingUp } from 'react-icons/bi';
import Card from '../cardComp/Card';

const TrendingComp = () => {
  return (
    <div>
      <button>
        <BiTrendingUp /> Trending
      </button>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default TrendingComp;
