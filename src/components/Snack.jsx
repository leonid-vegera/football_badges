import React from 'react';
import {Alert, Snackbar} from '@mui/material';
import {Message} from '../services/lang/messages';

const Snack = ({isOpen, close}) => {
  const {AddedToBasket} = Message.Message;

  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={close}>
      <Alert
        severity="success"
        onClose={close}
        sx={{width: '100%'}}
      >
        {AddedToBasket}
      </Alert>
    </Snackbar>
  )
}

export default Snack;
