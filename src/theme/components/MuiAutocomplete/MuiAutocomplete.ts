import { ComponentsOverrides, Theme } from '@mui/material/styles';
import { GLOBAL_COLORS } from '@src/constants';

type MuiAutocompleteType = {
  styleOverrides?: ComponentsOverrides<Theme>['MuiAutocomplete'];
};

const MuiAutocomplete: MuiAutocompleteType = {
  styleOverrides: {
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: GLOBAL_COLORS.gold
        },
        '&:hover fieldset': {
          borderColor: GLOBAL_COLORS.gold
        },
        '&.Mui-focused fieldset': {
          borderColor: GLOBAL_COLORS.gold
        }
      }
    },
    inputRoot: {
      padding: '0 8px'
    }
  }
};

export default MuiAutocomplete;
