import React from 'react';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import BasketItem from './BasketItem';
import { ShoppingBasket } from '@mui/icons-material';

const Basket = ({
                  isOpened,
                  order = [],
                  removeFromOrder,
                  closeCart
                }) => {
  return (
    <Drawer
      anchor='right'
      open={isOpened}
      onClose={closeCart}
    >
      <List sx={{ minWidth: '400px' }}>
        <ListItem>
          <ListItemButton>
            <ShoppingBasket/>
          </ListItemButton>
          <ListItemText primary="Корзина"/>
        </ListItem>
        <Divider variant="fullWidth"/>
      </List>

      {!order.length ? (
        <ListItem>Товари відсутні!</ListItem>
      ) : (
        <>
          {order.map((item, index) => (
            <BasketItem key={index} removeFromOrder={removeFromOrder} {...item} />
          ))}
          <Divider variant="fullWidth"/>
          <ListItem>
            <Typography sx={{ fontWeight: '700' }}>
              Загальна сума:{' '}
              {order.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)}{' '}
              грн.
            </Typography>
          </ListItem>
        </>
      )}
    </Drawer>
  )
}

export default Basket;