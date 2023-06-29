import React, { useContext } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { translate } from '../services/lang/messages';
import withToolTip from '../services/WithToolTip';
import { DispatchContext, StateContext } from '../services/StateContext';
import { actionTypes } from '../services/actionTypes';

const GoodsItem = ({ poster, name, price, id }) => {
  const { order } = useContext(StateContext);
  const dispatch = useContext(DispatchContext) || (() => {
  });

  const { Hryvna, Price, Buy } = translate('Service');
  const { AddedToBasket, AddGoodToBasket } = translate('Message');

  const addItemToBasket = () => {
    addToOrder({
      id: id,
      name: name,
      price: price,
      poster: poster,
    });
    dispatch({ type: actionTypes.OPEN_SNACKBAR, payload: true })
    dispatch({ type: actionTypes.SNACKBAR_TEXT, payload: AddedToBasket })
    dispatch({ type: actionTypes.SNACKBAR_SEVERITY, payload: 'success' })
  }

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex(
      (item) => item.id === goodsItem.id
    );

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      dispatch({
          type: actionTypes.ADD_TO_ORDER, payload: (
            order.map((item) => {
              if (item.id !== goodsItem.id) {
                return item;
              }

              return {
                id: item.id,
                name: item.name,
                price: item.price,
                poster: item.poster,
                quantity,
              };
            })
          )
        }
      );
    } else {
      dispatch({
        type: actionTypes.ADD_TO_ORDER, payload: (
          [
            ...order,
            {
              id: goodsItem.id,
              name: goodsItem.name,
              price: goodsItem.price,
              poster: goodsItem.poster,
              quantity,
            },
          ]
        )
      });
    }
  };

  const ButtonWithTooltip = withToolTip(Button);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%' }}>
        <Link href={poster} target="_blank" rel="noopener noreferrer">
          <CardMedia
            sx={{ height: 140 }}
            component="img"
            src={poster}
            title={name}
            alt={name}
          />
        </Link>

        <Stack sx={{ height: '50%' }} justifyContent="space-between">
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {Price}: {price} {Hryvna}
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonWithTooltip
              color='primary'
              title={AddGoodToBasket}
              placement='right'
              onClick={addItemToBasket}
            >
              {Buy}
              <AddShoppingCartIcon sx={{ ml: 1 }}/>
            </ButtonWithTooltip>
          </CardActions>
        </Stack>
      </Card>
    </Grid>
  );
}

export default GoodsItem;
