import React from 'react';
import { IconButton, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BasketItem = ({ removeFromOrder, name, price, id, quantity }) => {
  return (
    <ListItem>
      <Typography variant='body1'>
        {name} {price}грн x {quantity}
      </Typography>
      <IconButton aria-label="delete" onClick={() => removeFromOrder(id)}>
        <DeleteIcon/>
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;