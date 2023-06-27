import React, { createContext, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { goods } from '../data/goods';

export const GoodsContext = createContext(null);

export const GoodsProvider = ({ children }) => {
  const [order, setOrder] = useLocalStorage('order', []);
  const [translatedGoods, setTranslatedGoods] = useState(goods);
  const [preparedGoods, setPreparedGoods] = useState(goods);

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex(
      (item) => item.id === goodsItem.id
    );

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(order.map((item) => {
          if (item.id !== goodsItem.id) {
            return item;
          }

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            poster: item.poster,
            quantity,
          };
        }),
      );
    } else {
      setOrder([
          ...order,
          {
            id: goodsItem.id,
            name: goodsItem.name,
            price: goodsItem.price,
            poster: goodsItem.poster,
            quantity,
          },
        ],
      );
    }
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  const contextValue = {
    order,
    setOrder,
    translatedGoods,
    setTranslatedGoods,
    preparedGoods,
    setPreparedGoods,
    addToOrder,
    removeFromOrder
  }

  return (
    <GoodsContext.Provider value={contextValue}>
      {children}
    </GoodsContext.Provider>
  )
}