import { createMuiTheme } from 'material-ui/styles';

const theme = {
  palette: {
    primary: {
      main: '#fafafa',
      light: '#ffffff',
      dark: '#c7c7c7',
      contrastText: '#000000',
    },
    secondary: {
      main: '#00e5ff',
      light: '#6effff',
      dark: '#00b2cc',
      contrastText: '#000000',
    },
  },
};

export const muiTheme = createMuiTheme(theme);

export const spacing = {
  none: 0,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 40,
};


export default theme;
