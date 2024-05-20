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
    customBg: {
      main: '#E9ECEF',
      contrastText: '#334155',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
});

export default theme;
