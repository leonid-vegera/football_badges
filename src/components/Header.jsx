import React from 'react';
import { AppBar, FormControlLabel, IconButton, Switch, Toolbar, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import LanguageSwitch from './LanguageSwitch';
import { setActiveLanguage, translate } from '../services/lang/messages';

const Header = ({ openCart, orderLength, lang, setLang }) => {
  const { FootballBadges } = translate('Description');

  const handleLangChange = (event) => {
    const lang = event.target.checked ? 'ua' : 'en';
    setLang(lang);
    setActiveLanguage(lang)
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          {FootballBadges}
        </Typography>
        <FormControlLabel
          control={<LanguageSwitch sx={{ m: 1 }}/>}
          checked={lang === 'ua'}
          onChange={handleLangChange}
        />
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
