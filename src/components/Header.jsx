import React, { useContext } from 'react';
import { AppBar, FormControlLabel, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import LanguageSwitch from './LanguageSwitch';
import { setActiveLanguage, translate } from '../services/lang/messages';
import { GoodsContext } from '../services/GoodsProvider';
import { LangContext } from '../services/LangProvider';

const Header = ({ openCart }) => {
  const { language, setLanguage } = useContext(LangContext);
  const { order } = useContext(GoodsContext);
  const { FootballBadges } = translate('Description');

  const handleLangChange = (event) => {
    const lang = event.target.checked ? 'ua' : 'en';
    setLanguage(lang);
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
          checked={language === 'ua'}
          onChange={handleLangChange}
        />
        <IconButton color="inherit" onClick={openCart}>
          <Badge badgeContent={order.length} color="secondary">
            <ShoppingCart/>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
