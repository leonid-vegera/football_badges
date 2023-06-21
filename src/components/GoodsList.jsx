import React, { useContext } from 'react';
import GoodsItem from './GoodsItem';
import { Grid } from '@mui/material';
import { GoodsContext } from '../services/GoodsProvider';

const GoodsList = ({ goods, setOrder, setSnackSeverity, setSnackBarText }) => {
  const { preparedGoods } = useContext(GoodsContext);
  return (
    <Grid
      container
      spacing={2}
    >
      {preparedGoods.map((good) => (
        <GoodsItem
          key={good.id}
          setOrder={setOrder}
          setSnackSeverity={setSnackSeverity}
          setSnackBarText={setSnackBarText}
          {...good} />
      ))}
    </Grid>
  );
};

export default GoodsList;
