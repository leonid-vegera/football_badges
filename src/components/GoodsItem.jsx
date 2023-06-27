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
  Zoom
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { translate } from '../services/lang/messages';
import { GoodsContext } from '../services/GoodsProvider';
import { SnackBarContext } from '../services/SnackBarProvider';
import withToolTip from '../services/WithToolTip';

const GoodsItem = ({ poster, name, price, id }) => {
  const { addToOrder } = useContext(GoodsContext);
  const { setSnackSeverity, setSnackBarText, setOpenSnackbar } = useContext(SnackBarContext);

  const { Hryvna, Price, Buy } = translate('Service');
  const { AddedToBasket, AddGoodToBasket } = translate('Message');

  const addItemToBasket = () => {
    addToOrder({
      id: id,
      name: name,
      price: price,
      poster: poster,
    });
    setOpenSnackbar(true)
    setSnackBarText(AddedToBasket);
    setSnackSeverity('success');
  }

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
              transitionComponent={Zoom}
              placement='right'
              enterDelay={1000}
              leaveDelay={0}
              arrow={true}
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
