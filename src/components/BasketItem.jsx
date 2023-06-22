import React, { useContext } from 'react';
import { IconButton, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { translate } from '../services/lang/messages';
import { GoodsContext } from '../services/GoodsProvider';
import { SnackBarContext } from '../services/SnackBarProvider';

const BasketItem = ({ name, price, id, quantity, }) => {
  const { removeFromOrder } = useContext(GoodsContext);
  const { setSnackSeverity, setOpenSnackbar, setSnackBarText } = useContext(SnackBarContext);

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
