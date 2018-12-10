import { createMuiTheme } from '@material-ui/core/styles';

const primaryDark = '#F57C00';
const primaryColor = '#FF9800';
const primaryLight = '#FFE0B2';
const secondaryColor = '#607D8B';
const secondaryLight = '#78909C';
const errorColor = '#F44336';

const BaseTheme = createMuiTheme({
  palette: {
    primary: {
      light: primaryLight,
      dark: primaryDark,
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
      light: secondaryLight,
    },
    error: {
      main: errorColor
    }
  },
  typography: {
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Cursive',
        'Dancing Script',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      htmlFontSize: 10,
    },
  },
  BaseTheme: {
    fontFamily: 'Kailasa',
    backgroundColor: '#FCFDFC'
  },
  textField: {
    floatingLabelColor: primaryColor,
  },
});

export default BaseTheme;
