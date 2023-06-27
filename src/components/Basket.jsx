import React, { useContext } from 'react';
import {
  Avatar,
  Divider,
  Drawer, IconButton,
  List,
  ListItem, ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import BasketItem from './BasketItem';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { translate } from '../services/lang/messages';
import { GoodsContext } from '../services/GoodsProvider';
import withToolTip from '../services/WithToolTip';

const Basket = ({ isOpened, closeCart }) => {
  const { order = [] } = useContext(GoodsContext);
  const { Basket, TotalPrice, AddedGoods } = translate('Service');
  const { BasketIsEmpty, CloseBasket } = translate('Message');

  const CloseButtonWithTooltip = withToolTip(ListItemIcon);

  return (
    <Drawer
      anchor="right"
      open={isOpened}
      onClose={closeCart}
    >
      <List sx={{ width: '400px', maxWidth: '75vw' }}>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <SportsSoccerIcon/>
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography fontWeight='500'>
                {Basket}
              </Typography>
            }
            secondary={AddedGoods}
          />
          <CloseButtonWithTooltip
            onClick={closeCart}
            title={CloseBasket}
            placement='bottom-start'
          >
            <IconButton>
              <CloseOutlinedIcon/>
            </IconButton>
          </CloseButtonWithTooltip>
        </ListItem>
        <Divider variant="fullWidth"/>

        {!order.length ? (
          <ListItem>{BasketIsEmpty}</ListItem>
        ) : (
          <>
            {order.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <Divider variant="inset" component="li"/>}
                <BasketItem
                  {...item}
                />
              </React.Fragment>
            ))}
            <Divider variant="fullWidth"/>
            <ListItem sx={{ my: 2 }}>
              <Typography sx={{ fontWeight: '700' }}>
                {TotalPrice}:{' '}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{' '}
                {'\u20B4'}.
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  )
}

export default Basket;
