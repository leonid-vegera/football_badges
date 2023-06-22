import React from 'react';
import { createContext, useState } from 'react';
import { translate } from './lang/messages';

export const SnackBarContext = createContext('');

export const SnackBarProvider = ({ children }) => {
  const [isOpenSnackbar, setOpenSnackbar] = useState(false);
  const [snackBarText, setSnackBarText] = useState('');
  const [snackSeverity, setSnackSeverity] = useState('');

  const { Buy } = translate('Service');
  const closeSnackbar = (event) => {
    if (event && event.target.textContent === Buy) {
      return;
    }
    setOpenSnackbar(false);
  }
  
  const snackBarValue = {
    isOpenSnackbar,
    setOpenSnackbar,
    snackBarText,
    setSnackBarText,
    snackSeverity,
    setSnackSeverity,
    closeSnackbar
  };

  return (
    <SnackBarContext.Provider value={snackBarValue}>
      {children}
    </SnackBarContext.Provider>
  )
}