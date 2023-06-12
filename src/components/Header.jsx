import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { ShoppingCart } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Футбольні значки
        </Typography>
        <IconButton color='inherit'>
          <ShoppingCart/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header;