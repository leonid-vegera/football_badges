import React from 'react';
import {useState} from 'react';

import GoodsList from './components/GoodsList';
import Search from './components/Search';

import {goods} from './data/goods';
import Header from './components/Header';
import {Container} from '@mui/material';
import Basket from './components/Basket';
import Snack from './components/Snack';
import {Message} from './services/lang/messages';

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);
  const [isOpenCart, setOpenCart] = useState(false);
  const [isOpenSnackbar, setOpenSnackbar] = useState(false);

  const {Buy} = Message.Service;

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      ))
  };

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
            quantity,
          },
        ],
      );
    }
    setOpenSnackbar(true);
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  const closeSnackbar = (event) => {
    if (event && event.target.textContent === Buy) {
      return;
    }
    setOpenSnackbar(false);
  }

  return (
    <div className="App">
      <div className="container">
        <Header
          openCart={() => setOpenCart(true)}
          orderLength={order.length}
        />
        <Container sx={{mt: '1rem'}}>
          <Search
            value={search}
            onChange={handleChange}
          />
          <GoodsList
            goods={products}
            setOrder={addToOrder}
          />
        </Container>
        <Basket
          order={order}
          removeFromOrder={removeFromOrder}
          isOpened={isOpenCart}
          closeCart={() => setOpenCart(false)}
        />
        <Snack isOpen={isOpenSnackbar} close={closeSnackbar}/>
      </div>
    </div>
  );
}

export default App;
