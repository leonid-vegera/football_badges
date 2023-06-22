import React, { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { SnackBarContext } from '../services/SnackBarProvider';

const Snack = () => {
  const { closeSnackbar, isOpenSnackbar, snackBarText, snackSeverity } = useContext(SnackBarContext);

  return (
    <Snackbar open={isOpenSnackbar} autoHideDuration={3000} onClose={closeSnackbar}>
      <Alert
        severity={snackSeverity}
        onClose={closeSnackbar}
        sx={{ width: '100%' }}
      >
        {snackBarText}
      </Alert>
    </Snackbar>
  )
}

export default Snack;
