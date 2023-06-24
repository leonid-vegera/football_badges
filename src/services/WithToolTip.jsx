import { Button, Tooltip, Zoom } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';

const withToolTip = (WrappedComponent) => {

  const WithToolTipComponent = ({ ...props }) => {
    return (
      <Tooltip
        title={AddGoodToBasket}
        TransitionComponent={Zoom}
        placement="right"
        enterDelay={500}
        leaveDelay={200}
        arrow
      >
        <WrappedComponent
          variant="contained"
          endIcon={<AddShoppingCartIcon/>}
          onClick={addItemToBasket}
        >
          {Buy}
        </WrappedComponent>
      </Tooltip>
    )
  }

  return WithToolTipComponent;
}

export default withToolTip;