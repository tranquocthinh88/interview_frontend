import { extendTheme } from '@mui/material';
import { pink } from '@mui/material/colors';

export const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: pink[600],
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: pink[400],
        },
      },
    },
  },
});
