import React from 'react';

const BasketItem = ({ setOrder, name, price, id, quantity }) => {
  return (
    <li className='list-group-item'>
      {name} {price}грн x {quantity}
      <button
        className='btn btn-primary'
        onClick={() => setOrder(id)}
      >
        Видалити товар
      </button>
    </li>
  );
};

export default BasketItem;