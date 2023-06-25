import { Fade, Tooltip } from '@mui/material';
import React from 'react';

const withToolTip = (WrappedComponent) => {

  const WithToolTipComponent = (props) => {
    const {
      title,
      transitionComponent = Fade,
      placement,
      enterDelay,
      leaveDelay,
      arrow,
      onClick,
      endIcon = false,
      children
    } = props;
    return (
      <Tooltip
        title={title}
        TransitionComponent={transitionComponent}
        placement={placement}
        enterDelay={enterDelay}
        leaveDelay={leaveDelay}
        arrow={arrow}
      >
        <WrappedComponent
          variant="contained"
          endIcon={endIcon}
          onClick={onClick}
        >
          {children}
        </WrappedComponent>
      </Tooltip>
    )
  }

  return WithToolTipComponent;
}

export default withToolTip;