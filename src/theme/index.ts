import { createTheme, Theme } from '@mui/material/styles';

import {
  MuiAutocomplete,
  MuiBadge,
  MuiButton,
  MuiTypography
} from './components';
import palette from './palette';

const theme: Theme = createTheme({
  palette,
  components: {
    MuiButton,
    MuiTypography,
    MuiBadge,
    MuiAutocomplete
  },
  typography: {
    fontFamily: ['Cormorant Garamond', 'sans-serif'].join(',')
  }
});

export default theme;
