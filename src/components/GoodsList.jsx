import React, { useContext } from 'react';
import GoodsItem from './GoodsItem';
import { Grid } from '@mui/material';
import { GoodsContext } from '../services/GoodsProvider';

const GoodsList = () => {
  const { preparedGoods } = useContext(GoodsContext);

  return (
    <Grid
      container
      spacing={2}
    >
      {preparedGoods.map((good) => (
        <GoodsItem key={good.id} {...good} />
      ))}
    </Grid>
  );
};

export default GoodsList;
