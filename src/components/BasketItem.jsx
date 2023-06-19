import React from 'react';
import { IconButton, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { translate } from '../services/lang/messages';

const BasketItem = ({
                      removeFromOrder,
                      name,
                      price,
                      id,
                      quantity,
                      setSnackSeverity,
                      setOpenSnackbar,
                      setSnackBarText
                    }) => {
  const { Hryvna } = translate('Service');
  const { DeletedFromBasket } = translate('Message');

  const deleteItemHandle = () => {
    removeFromOrder(id);
    setOpenSnackbar(true);
    setSnackBarText(DeletedFromBasket);
    setSnackSeverity('warning');
  }

  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price} {Hryvna} x {quantity}
      </Typography>
      <IconButton aria-label="delete" onClick={deleteItemHandle}>
        <DeleteIcon/>
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
