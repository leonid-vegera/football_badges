import React from 'react';
import { Alert, Snackbar } from '@mui/material';

const Snack = ({ isOpen, close }) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={close}>
      <Alert
        severity="success"
        onClose={close}
        sx={{ width: '100%' }}
      >
        Товар додано до корзини!
      </Alert>
    </Snackbar>
  )
}

export default Snack;