import React from 'react';
import {IconButton, ListItem, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {Message} from '../services/lang/messages';

const BasketItem = ({removeFromOrder, name, price, id, quantity}) => {
  const {Hryvna} = Message.Service;
  
  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price} {Hryvna} x {quantity}
      </Typography>
      <IconButton aria-label="delete" onClick={() => removeFromOrder(id)}>
        <DeleteIcon/>
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
