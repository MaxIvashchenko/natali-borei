import { ComponentsOverrides, Theme } from '@mui/material/styles';

type MuiBadgeType = {
  styleOverrides?: ComponentsOverrides<Theme>['MuiBadge'];
};

const MuiBadge: MuiBadgeType = {
  styleOverrides: {
    badge: ({ theme }) => ({
      background: theme.palette.primary.main,
      color: '#fff',
      fontWeight: 'bold',
      padding: '4px 0px 8px',
      margin: 0,
      borderRadius: '100%',
      top: 6,
      right: 8
    })
  }
};

export default MuiBadge;
