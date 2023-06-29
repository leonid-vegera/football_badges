import React, { useContext } from 'react';
import { AppBar, FormControlLabel, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingCart, SportsSoccer as SportsSoccerIcon } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import LanguageSwitch from '../services/lang/LanguageSwitch';
import { setActiveLanguage, translate } from '../services/lang/messages';
import withToolTip from '../services/WithToolTip';
import { DispatchContext, StateContext } from '../services/StateContext';
import { actionTypes } from '../services/actionTypes';

const Header = ({ openCart }) => {
  const { language, setLanguage, order } = useContext(StateContext);
  const dispatch = useContext(DispatchContext) || (() => {
  });

  const { FootballBadges } = translate('Description');
  const { ChangeLanguage, GoodsInBasket } = translate('Message');

  const handleLangChange = (event) => {
    const lang = event.target.checked ? 'ua' : 'en';
    dispatch({ type: actionTypes.UPDATE_LANGUAGE, payload: lang });
    setLanguage(lang);
    setActiveLanguage(lang);
  }

  const LanguageLabelWithTooltip = withToolTip(FormControlLabel);
  const BasketLabelWithTooltip = withToolTip(IconButton);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton color='inherit' sx={{ cursor: 'initial' }}>
          <SportsSoccerIcon/>
        </IconButton>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          {FootballBadges}
        </Typography>
        <LanguageLabelWithTooltip
          title={ChangeLanguage}
          control={<LanguageSwitch sx={{ m: 1 }}/>}
          checked={language === 'ua'}
          onChange={handleLangChange}
        />
        <BasketLabelWithTooltip
          title={GoodsInBasket}
          placement='bottom-start'
          color='inherit'
          onClick={openCart}
        >
          <Badge badgeContent={order.length} color="secondary">
            <ShoppingCart/>
          </Badge>
        </BasketLabelWithTooltip>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
