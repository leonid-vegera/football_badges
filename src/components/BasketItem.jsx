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
import withToolTip from '../services/WithToolTip';
import { DispatchContext, StateContext } from '../services/StateContext';
import { actionTypes } from '../services/actionTypes';

const BasketItem = ({ name, price, id, quantity, poster }) => {
  const { order, setOrder } = useContext(StateContext);
  const dispatch = useContext(DispatchContext) || (() => {
  });

  const { Hryvna } = translate('Service');
  const { DeletedFromBasket, DeleteFromBasket } = translate('Message');

  const DeleteButtonWithTooltip = withToolTip(IconButton);

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
    dispatch({
      type: actionTypes.ADD_TO_ORDER, payload: (
        order.filter((item) => item.id !== goodsItem)
      )
    })
  };

  const deleteItemHandle = () => {
    removeFromOrder(id);
    dispatch({ type: actionTypes.OPEN_SNACKBAR, payload: true })
    dispatch({ type: actionTypes.SNACKBAR_TEXT, payload: DeletedFromBasket })
    dispatch({ type: actionTypes.SNACKBAR_SEVERITY, payload: 'warning' })
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
