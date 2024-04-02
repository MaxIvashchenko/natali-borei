import { Cormorant_Garamond } from 'next/font/google';
import { createTheme, Theme } from '@mui/material/styles';

import {
  MuiAutocomplete,
  MuiBadge,
  MuiButton,
  MuiTypography
} from './components';
import palette from './palette';

const CormorantGaramond = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  style: ['normal'],
  fallback: ['sans-serif']
});

const theme: Theme = createTheme({
  palette,
  components: {
    MuiButton,
    MuiTypography,
    MuiBadge,
    MuiAutocomplete
  },
  typography: {
    fontFamily: CormorantGaramond.style.fontFamily
  }
});

export default theme;
