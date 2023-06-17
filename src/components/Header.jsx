import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import {Message} from '../services/lang/messages';

const Header = ({openCart, orderLength}) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{flexGrow: 1}}>
          {Message.Description.FootballBadges}
        </Typography>
        <IconButton color="inherit" onClick={openCart}>
          <Badge badgeContent={orderLength} color="secondary">
            <ShoppingCart/>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
