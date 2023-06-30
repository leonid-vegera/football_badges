import React, { useContext, useEffect } from 'react';
import { useState } from 'react';

import GoodsList from './components/GoodsList';
import Search from './components/Search';

import { goods } from './data/goods';
import Header from './components/Header';
import { Box, Container } from '@mui/material';
import Basket from './components/Basket';
import Snack from './components/Snack';
import { translate } from './services/lang/messages';
import { DispatchContext, StateContext } from './services/StateContext';

const App = () => {
  const [search, setSearch] = useState('');
  const [isOpenCart, setOpenCart] = useState(false);

  const { language, translatedGoods } = useContext(StateContext);
  const dispatch = useContext(DispatchContext) || (() => {
  });

  useEffect(() => {
    const translations = translate('Description');
    const keys = Object.keys(translations);

    const updatedGoods = goods.map((item, index) => ({
      ...item,
      name: translations[keys[index + 1]],
    }));

    dispatch({ type: 'SET_PREPARED', payload: updatedGoods })
    dispatch({ type: 'SET_TRANSLATED', payload: updatedGoods })
  }, [language]);

  const handleChange = (e) => {
    if (!e.target.value) {
      dispatch({ type: 'SET_PREPARED', payload: translatedGoods });
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    dispatch({
      type: 'SET_PREPARED', payload: (
        translatedGoods.filter((good) =>
          good.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    });
  };

  return (
    <div className="App">
      <Box sx={{ minWidth: '340px' }}>
        <Header
          openCart={() => setOpenCart(true)}
        />
        <Container sx={{ mt: '1rem', minWidth: '340px' }}>
          <Search
            value={search}
            onChange={handleChange}
          />
          <GoodsList/>
        </Container>
        <Basket
          isOpened={isOpenCart}
          closeCart={() => setOpenCart(false)}
        />
        <Snack/>
      </Box>
    </div>
  );
}

export default App;
