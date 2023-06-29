import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

const LanguageSwitch = styled(Switch)(({ theme }) => ({
  width: 61,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        content: "'UA'",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 5,
        top: 5,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#CB1D44',
    width: 32,
    height: 32,
    '&:before': {
      content: "'EN'",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 5,
      top: 5,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export default LanguageSwitch;