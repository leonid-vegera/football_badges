import React, { createContext, useReducer } from 'react';
import useLocalStorage from './useLocalStorage';
import { goods } from '../data/goods';
import { actionTypes } from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    case actionTypes.OPEN_SNACKBAR:
      return {
        ...state,
        isOpenSnackbar: action.payload,
      };

    case actionTypes.SNACKBAR_TEXT:
      return {
        ...state,
        snackBarText: action.payload,
      };

    case actionTypes.SNACKBAR_SEVERITY:
      return {
        ...state,
        snackSeverity: action.payload,
      };

    case actionTypes.ADD_TO_ORDER:
      return {
        ...state,
        order: action.payload,
      };

    case actionTypes.SET_TRANSLATED:
      return {
        ...state,
        translatedGoods: action.payload,
      };

    case actionTypes.SET_PREPARED:
      return {
        ...state,
        preparedGoods: action.payload,
      };

    default:
      return state;
  }
}

export const DispatchContext = createContext(null);
export const StateContext = createContext(null);

export const StateProvider = ({ children }) => {

  const [language, setLanguage] = useLocalStorage('language', '');
  const [order, setOrder] = useLocalStorage('order', []);

  const initialState = {
    language: language,
    setLanguage: setLanguage,
    isOpenSnackbar: false,
    snackBarText: '',
    snackSeverity: '',
    order: order,
    setOrder: setOrder,
    translatedGoods: goods,
    preparedGoods: goods,
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}