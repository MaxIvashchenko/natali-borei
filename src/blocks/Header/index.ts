import {
  Box,
  Button,
  Collapse,
  IconButton as MuiIconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { GLOBAL_COLORS } from '@src/constants';

const HeaderWrapper = styled(Box)<{ scrolled: number }>(({ scrolled }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  zIndex: 10,
  position: 'fixed',
  transition: 'background 0.5s ease-out',
  background: scrolled ? '#ffffffe6' : '#fff',
  borderBottom: `4px solid ${GLOBAL_COLORS.gold}`,
  boxSizing: 'border-box'
}));

const PaddingWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 90,
  minHeight: 88,
  maxWidth: 1920,
  margin: '0 auto',

  '& .activeIcon, & .activeIcon:hover': {
    backgroundColor: GLOBAL_COLORS.gold,

    '& path': {
      fill: 'white'
    }
  },

  [theme.breakpoints.up('lg')]: {
    padding: '16px 48px'
  },
  [theme.breakpoints.down('lg')]: {
    padding: '16px 32px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px',
    justifyContent: 'end',

    '&.desktop': {
      display: 'none'
    }
  },
  [theme.breakpoints.up('sm')]: {
    '&.mobile': {
      display: 'none'
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  '& path': {
    fill: theme.palette.common.black
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'start'
  }
}));

const LogoButton = styled(MuiIconButton)(({ theme }) => ({
  padding: 0,
  borderRadius: 0,

  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    zIndex: 91,
    transform: 'scale(0.8)',

    '& svg': {
      width: 102,
      height: 102,
      transition: 'all 0.2s ease-out'
    },
    '&:hover': {
      background: 'none',
      '& svg': {
        width: 120,
        height: 120,
        transition: 'all 0.2s ease-out'
      }
    }
  },
  [theme.breakpoints.down('md')]: {
    background: 'white',
    position: 'absolute',
    zIndex: 91,
    transform: 'scale(0.7)',

    '& svg': {
      width: 90,
      height: 90,
      transition: 'none'
    },
    '&:hover': {
      background: 'none',
      '& svg': {
        transition: 'none',
        width: 90,
        height: 90
      }
    }
  }
}));

const MobileSearchWrapper = styled(Collapse)({
  width: '100%',
  backgroundColor: 'rgba(255,255,255,0.75)',
  position: 'absolute',
  top: 92,
  left: 0
});

const MobileSearchOuter = styled(Button)({
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: 146,
  left: 0,
  borderRadius: 0,
  background: '#8080804a'
});

const Header = {
  HeaderWrapper,
  PaddingWrapper,
  IconWrapper,
  LogoButton,
  MobileSearchWrapper,
  MobileSearchOuter
};

export default Header;
