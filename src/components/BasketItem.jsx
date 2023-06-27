import React, { useContext } from 'react';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Zoom
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { translate } from '../services/lang/messages';
import { GoodsContext } from '../services/GoodsProvider';
import { SnackBarContext } from '../services/SnackBarProvider';
import withToolTip from '../services/WithToolTip';

const BasketItem = ({ name, price, id, quantity, poster }) => {
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
      <ListItemAvatar>
        <Avatar alt={name} src={poster}/>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {price} {Hryvna} x {quantity} {' = '}
            </Typography>
            <Typography variant="body2" component="span" fontWeight='700'>
              {price * quantity} {'\u20B4'}
            </Typography>
          </React.Fragment>
        }
        sx={{ pr: 1 }}
      />
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
        <DeleteOutlineIcon/>
      </DeleteButtonWithTooltip>
    </ListItem>
  );
};

export default BasketItem;
