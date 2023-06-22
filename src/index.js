import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';
import { LangProvider } from './services/LangProvider';
import { GoodsProvider } from './services/GoodsProvider';
import { SnackBarProvider } from './services/SnackBarProvider';

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
      <LangProvider>
        <SnackBarProvider>
          <GoodsProvider>
            <App/>
          </GoodsProvider>
        </SnackBarProvider>
      </LangProvider>
    </DevSupport>
  </ThemeProvider>
);

