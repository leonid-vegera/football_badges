import React, { createContext } from 'react';
import useLocalStorage from './useLocalStorage';

export const LangContext = createContext('ua');

export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', '');

  const langValue = {
    language,
    setLanguage
  }

  return (
    <LangContext.Provider value={langValue}>
      {children}
    </LangContext.Provider>
  )
}