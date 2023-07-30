import React, { useContext } from 'react';
import { apiContext } from '../../dataProvider/DataProvider';

const RandomGifs = () => {
  const { randomData } = useContext(apiContext);

  return (
    <div>
      {randomData
        ? randomData?.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.images.fixed_height.url} alt='' />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default RandomGifs;
