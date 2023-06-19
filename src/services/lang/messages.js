import ua from './ua';
import en from './en';

let activeLanguage = JSON.parse(localStorage.getItem('language'));

export const setActiveLanguage = (language) => {
  activeLanguage = language;
}

export const translate = (key) => {
  let translations;
  switch (activeLanguage) {
    case 'en':
      translations = en;
      break;
    case 'ua':
      translations = ua;
      break;
    default:
      translations = ua;
  }

  return translations[key] || '';
}