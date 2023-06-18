import React from 'react';
import {Alert, Snackbar} from '@mui/material';

const Snack = ({isOpen, close, severity, text}) => {

  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={close}>
      <Alert
        severity={severity}
        onClose={close}
        sx={{width: '100%'}}
      >
        {text}
      </Alert>
    </Snackbar>
  )
}

export default Snack;
