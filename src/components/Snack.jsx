import React, { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { translate } from '../services/lang/messages';
import { DispatchContext, StateContext } from '../services/StateContext';
import { actionTypes } from '../services/actionTypes';

const Snack = () => {
  const { isOpenSnackbar, snackBarText, snackSeverity } = useContext(StateContext);
  const dispatch = useContext(DispatchContext) || (() => {
  });
  const { Buy } = translate('Service');


  const closeSnackbar = (event) => {
    if (event && event.target.textContent === Buy) {
      return;
    }
    dispatch({ type: actionTypes.OPEN_SNACKBAR, payload: false })
  }

  return (
    <Snackbar open={isOpenSnackbar} autoHideDuration={3000} onClose={closeSnackbar}>
      <Alert
        variant='filled'
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
