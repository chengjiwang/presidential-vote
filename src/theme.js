import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#D4009B',
    },
    text: {
      primary: '#334155',
      secondary: '#64748B',
    },
    bg: {
      main: '#E9ECEF',
      contrastText: '#334155',
    }
  },
});

export default theme;
