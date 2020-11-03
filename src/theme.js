import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#024980",
    },
    secondary: {
      main: "#DD8A3E",
    },
    error: {
      main: red.A400,
    },
    dark: {
      main: "#343A40",
    },
    light: {
      main: "#DADFE7",
    },
    background: {
      default: "#f4f4f4",
    },
  },
});

export default theme;
