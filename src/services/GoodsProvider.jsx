import React, { createContext, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { goods } from '../data/goods';

export const GoodsContext = createContext(null);

export const GoodsProvider = ({ children }) => {
  const [order, setOrder] = useLocalStorage('order', []);
  const [translatedGoods, setTranslatedGoods] = useState(goods);
  const [preparedGoods, setPreparedGoods] = useState(goods);
  const contextValue = {
    order,
    setOrder,
    translatedGoods,
    setTranslatedGoods,
    preparedGoods,
    setPreparedGoods
  }

  return (
    <GoodsContext.Provider value={contextValue}>
      {children}
    </GoodsContext.Provider>
  )
}