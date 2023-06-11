import React from 'react';

import GoodsItem from './GoodsItem';

const GoodsList = ({ goods, setOrder }) => {
  return (
    <div className='goods-list col-md-8'>
      <div className='row'>
        {goods.map((good) => (
          <GoodsItem key={good.id} setOrder={setOrder} {...good} />
        ))}
      </div>
    </div>
  );
};

export default GoodsList;