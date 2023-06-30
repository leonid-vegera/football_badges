import React, { useContext } from 'react';
import GoodsItem from './GoodsItem';
import { Grid } from '@mui/material';
import { StateContext } from '../services/StateContext';

const GoodsList = () => {
  const { preparedGoods } = useContext(StateContext);

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
