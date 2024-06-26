import { ButtonProps } from '@mui/material';
import {
  ComponentsOverrides,
  ComponentsVariants,
  Theme
} from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    withIcon: true;
    dark: true;
    wrapper: true;
  }
}

type MuiButtonType = {
  defaultProps?: ButtonProps;
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
};

const MuiButton: MuiButtonType = {
  defaultProps: {
    disableRipple: true,
    variant: 'contained',
    size: 'large'
  },
  styleOverrides: {
    root: {
      borderRadius: 4,
      textTransform: 'none',
      color: 'white',
      boxShadow: 'none',

      '&.Mui-disabled': {
        color: 'white',
        opacity: 0.3
      },

      '&:hover': {
        boxShadow: 'none'
      }
    },
    sizeLarge: {
      padding: '16px 32px',

      fontWeight: 700,
      fontSize: 16,
      lineHeight: '24px'
    },
    sizeMedium: {
      padding: '10px 16px',

      fontWeight: 700,
      fontSize: 14,
      lineHeight: '20px'
    },
    sizeSmall: {
      padding: '6px 12px',

      fontWeight: 700,
      fontSize: 14,
      lineHeight: '20px'
    },
    contained: () => ({
      background: '#554a43',

      '&:hover': {
        background: '#a35817'
      },

      '&.Mui-disabled': {
        background: 'grey'
      }
    }),
    outlined: ({ theme }) => ({
      background: 'transparent',
      borderColor: theme.palette.grey[500],

      '&:hover': {
        background: theme.palette.grey[400],
        borderColor: theme.palette.grey[500]
      },

      '&.Mui-disabled': {
        borderColor: theme.palette.grey[500]
      }
    }),
    text: ({ theme }) => ({
      background: 'none',
      color: theme.palette.common.black,

      '&:hover': {
        background: 'none',
        color: theme.palette.grey[700],
        '& path': {
          fill: theme.palette.grey[700]
        }
      },

      '&.Mui-disabled': {
        color: theme.palette.common.white
      }
    }),
    startIcon: {
      marginRight: 8,
      marginLeft: 0
    }
  },
  variants: [
    {
      props: { variant: 'wrapper' },
      style: {
        display: 'block',
        padding: 0
      }
    }
  ]
};

export default MuiButton;
