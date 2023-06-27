import { Tooltip, Zoom } from '@mui/material';
import React from 'react';

const withToolTip = (WrappedComponent) => {

  const WithToolTipComponent = ({ ...props }) => {
    const {
      children,
      title,
      transitionComponent = Zoom,
      placement = 'bottom',
      enterDelay = 1000,
      leaveDelay = 0,
      arrow = true,
      onClick = () => {
      },
      onChange = () => {
      },
      control = null,
      checked = false,
      color = 'inherit',
      ariaLabel = '',
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
          onClick={onClick}
          control={control}
          checked={checked}
          onChange={onChange}
          color={color}
          aria-label={ariaLabel}
        >
          {children}
        </WrappedComponent>
      </Tooltip>
    )
  }

  return WithToolTipComponent;
}

export default withToolTip;