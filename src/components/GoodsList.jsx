import React from 'react';
import GoodsItem from './GoodsItem';
import { Grid } from '@mui/material';

const GoodsList = ({ goods, setOrder }) => {
  return (
    <Grid
      container
      spacing={2}
    >
      {goods.map((good) => (
        <GoodsItem key={good.id} setOrder={setOrder} {...good} />
      ))}
    </Grid>
  );
};

export default GoodsList;