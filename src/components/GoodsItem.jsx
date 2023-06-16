import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const GoodsItem = ({setOrder, poster, name, price, id}) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{height: '100%'}}>
        <a href={poster} target="_blank">
          <CardMedia
            sx={{height: 140}}
            component="img"
            src={poster}
            title={name}
            alt={name}
          />
        </a>

        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Ціна: {price} грн
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            endIcon={<AddShoppingCartIcon/>}
            onClick={() =>
              setOrder({
                id: id,
                name: name,
                price: price,
              })
            }
          >
            Купити
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default GoodsItem;
