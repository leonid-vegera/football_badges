import React, { useContext } from 'react';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import BasketItem from './BasketItem';
import { ShoppingBasket } from '@mui/icons-material';
import { translate } from '../services/lang/messages';
import { GoodsContext } from '../services/GoodsProvider';

const Basket = ({ isOpened, closeCart }) => {
  const { order = [] } = useContext(GoodsContext);
  const { Basket, Hryvna, TotalPrice } = translate('Service');
  const { BasketIsEmpty } = translate('Message');

  return (
    <Drawer
      anchor="right"
      open={isOpened}
      onClose={closeCart}
    >
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemButton>
            <ShoppingBasket/>
          </ListItemButton>
          <ListItemText primary={Basket}/>
        </ListItem>
        <Divider variant="fullWidth"/>
      </List>

      {!order.length ? (
        <ListItem>{BasketIsEmpty}</ListItem>
      ) : (
        <>
          {order.map((item, index) => (
            <BasketItem
              key={index}
              {...item}
            />
          ))}
          <Divider variant="fullWidth"/>
          <ListItem>
            <Typography sx={{ fontWeight: '700' }}>
              {TotalPrice}:{' '}
              {order.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)}{' '}
              {Hryvna}.
            </Typography>
          </ListItem>
        </>
      )}
    </Drawer>
  )
}

export default Basket;
