import React from 'react';
import BasketItem from './BasketItem';

const BasketList = ({ order, setOrder }) => {
  if (!order.length) {
    return (
      <ul className='basket list-group col-md-4'>
        <li className='list-group-item active'>Basket</li>
        <li className='list-group-item'>No goods</li>
      </ul>
    );
  }

  return (
    <ul className='basket list-group col-md-4'>
      <li className='list-group-item active'>Basket</li>
      {order.map((item, index) => (
        <BasketItem key={index} setOrder={setOrder} {...item} />
      ))}
      <li className='list-group-item active'>
        Total amount:{' '}
        {order.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)}{' '}
        pounds.
      </li>
    </ul>
  );
};

export default BasketList;