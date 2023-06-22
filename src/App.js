import React, { useContext, useEffect } from 'react';
import { useState } from 'react';

import GoodsList from './components/GoodsList';
import Search from './components/Search';

import { goods } from './data/goods';
import Header from './components/Header';
import { Container } from '@mui/material';
import Basket from './components/Basket';
import Snack from './components/Snack';
import { translate } from './services/lang/messages';
import { LangContext } from './services/LangProvider';
import { GoodsContext } from './services/GoodsProvider';

const App = () => {
  const [search, setSearch] = useState('');
  const [isOpenCart, setOpenCart] = useState(false);

  const { language } = useContext(LangContext);
  const {
    translatedGoods,
    setTranslatedGoods,
    setPreparedGoods
  } = useContext(GoodsContext);

  useEffect(() => {
    const translations = translate('Description');
    const keys = Object.keys(translations);

    const updatedGoods = goods.map((item, index) => ({
      ...item,
      name: translations[keys[index + 1]],
    }));

    setPreparedGoods(updatedGoods);
    setTranslatedGoods(updatedGoods);
  }, [language]);

  const handleChange = (e) => {
    if (!e.target.value) {
      setPreparedGoods(translatedGoods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setPreparedGoods(
      translatedGoods.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      ))
  };

  return (
    <div className="App">
      <div className="container">
        <Header
          openCart={() => setOpenCart(true)}
        />
        <Container sx={{ mt: '1rem' }}>
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
      </div>
    </div>
  );
}

export default App;
