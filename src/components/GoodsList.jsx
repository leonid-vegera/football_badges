import React, { useEffect, useState } from 'react';
import GoodsItem from './GoodsItem';
import { Grid } from '@mui/material';
import { translate } from '../services/lang/messages';

const GoodsList = ({ goods, setOrder, setSnackSeverity, setSnackBarText, language }) => {
  const [translatedGoods, setTranslatedGoods] = useState(goods);

  useEffect(() => {
    const translations = translate('Description');
    const keys = Object.keys(translations);

    const updatedGoods = goods.map((item, index) => ({
      ...item,
      name: translations[keys[index + 1]],
    }));

    setTranslatedGoods(updatedGoods);
  }, [language]);

  return (
    <Grid
      container
      spacing={2}
    >
      {translatedGoods.map((good) => (
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
