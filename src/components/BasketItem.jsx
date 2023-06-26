import React, { useContext } from 'react';
import { IconButton, ListItem, Stack, Typography, Zoom } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { translate } from '../services/lang/messages';
import { GoodsContext } from '../services/GoodsProvider';
import { SnackBarContext } from '../services/SnackBarProvider';
import withToolTip from '../services/WithToolTip';

const BasketItem = ({ name, price, id, quantity, }) => {
  const { removeFromOrder } = useContext(GoodsContext);
  const { setSnackSeverity, setOpenSnackbar, setSnackBarText } = useContext(SnackBarContext);

  const { Hryvna } = translate('Service');
  const { DeletedFromBasket, DeleteFromBasket } = translate('Message');

  const DeleteButtonWithTooltip = withToolTip(IconButton);

  const deleteItemHandle = () => {
    removeFromOrder(id);
    setOpenSnackbar(true);
    setSnackBarText(DeletedFromBasket);
    setSnackSeverity('warning');
  }

  return (
    <ListItem>
      <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
        <Typography variant="body1">
          {name} {price} {Hryvna} x {quantity}
        </Typography>
        <DeleteButtonWithTooltip
          title={DeleteFromBasket}
          transitionComponent={Zoom}
          placement='bottom-start'
          enterDelay={500}
          leaveDelay={0}
          arrow={true}
          onClick={deleteItemHandle}
          ariaLabel="delete"
        >
          <DeleteIcon/>
        </DeleteButtonWithTooltip>
      </Stack>
    </ListItem>
  );
};

export default BasketItem;
