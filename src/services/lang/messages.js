import ua from './ua';
import en from './en';

const getLocalization = () => {
  let Message = ua;
  return Message;
}

export const Message = getLocalization();
