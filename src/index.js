import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001D42',
    },
    secondary: {
      main: '#ff7f50',
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
      <App/>
    </DevSupport>
  </ThemeProvider>
);

