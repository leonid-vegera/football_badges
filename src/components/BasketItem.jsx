import React from 'react';

const BasketItem = ({ setOrder, name, price, id, quantity }) => {
  return (
    <li className='list-group-item'>
      {name} {price}pounds x{quantity}
      <button
        className='btn btn-primary'
        onClick={() => setOrder(id)}
      >
        Delete from the basket
      </button>
    </li>
  );
};

export default BasketItem;