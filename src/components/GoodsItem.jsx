import React from 'react';

const GoodsItem = ({ setOrder, poster, name, price, id }) => {

  return (
    <div className='col-12 col-md-6 px-md-2'>
      <div className='card'>
        <img
          src={poster}
          className='card-img-top'
          alt={name}
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>Price: {price} pounds.</p>
          <button
            className='btn btn-primary'
            onClick={() =>
              setOrder({
                id: id,
                name: name,
                price: price,
              })
            }
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;