import React, { useContext } from 'react';
import { AppBar, FormControlLabel, IconButton, Toolbar, Typography, Zoom } from '@mui/material';
import { ShoppingCart, SportsSoccer as SportsSoccerIcon } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import LanguageSwitch from './LanguageSwitch';
import { setActiveLanguage, translate } from '../services/lang/messages';
import { GoodsContext } from '../services/GoodsProvider';
import { LangContext } from '../services/LangProvider';
import withToolTip from '../services/WithToolTip';

const Header = ({ openCart }) => {
  const { language, setLanguage } = useContext(LangContext);
  const { order } = useContext(GoodsContext);
  const { FootballBadges } = translate('Description');
  const { ChangeLanguage, GoodsInBasket } = translate('Message');

  const handleLangChange = (event) => {
    const lang = event.target.checked ? 'ua' : 'en';
    setLanguage(lang);
    setActiveLanguage(lang)
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
          transitionComponent={Zoom}
          placement='bottom'
          enterDelay={500}
          leaveDelay={0}
          arrow={true}
          control={<LanguageSwitch sx={{ m: 1 }}/>}
          checked={language === 'ua'}
          onChange={handleLangChange}
        />
        <BasketLabelWithTooltip
          title={GoodsInBasket}
          transitionComponent={Zoom}
          placement='bottom-start'
          enterDelay={500}
          leaveDelay={0}
          arrow={true}
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
