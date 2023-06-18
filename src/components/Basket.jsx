import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography} from '@mui/material';
import BasketItem from './BasketItem';
import {ShoppingBasket} from '@mui/icons-material';
import {Message} from '../services/lang/messages';

const Basket = ({
  isOpened,
  setOpenSnackbar,
  order = [],
  removeFromOrder,
  closeCart,
  setSnackSeverity,
  setSnackBarText
}) => {
  const {Basket, Hryvna, TotalPrice,} = Message.Service;
  const {BasketIsEmpty} = Message.Message;

  return (
    <Drawer
      anchor="right"
      open={isOpened}
      onClose={closeCart}
    >
      <List sx={{width: '400px'}}>
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
              removeFromOrder={removeFromOrder}
              {...item}
              setOpenSnackbar={setOpenSnackbar}
              setSnackBarText={setSnackBarText}
              setSnackSeverity={setSnackSeverity}
            />
          ))}
          <Divider variant="fullWidth"/>
          <ListItem>
            <Typography sx={{fontWeight: '700'}}>
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
