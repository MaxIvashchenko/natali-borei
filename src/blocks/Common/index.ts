import { Box, CardActionArea as MuiCardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GLOBAL_COLORS } from '@src/constants';

const CenteredWrapper = styled(Box)({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  flex: 1
});

const CardActionArea = styled(MuiCardActionArea)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  background: theme.palette.common.white,
  '& img': {
    width: '160px',
    height: '160px'
  },

  [theme.breakpoints.down('sm')]: {
    '& img': {
      width: '132px',
      height: '132px'
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  padding: 24,
  background: theme.palette.primary.main,
  width: 'auto',
  '& svg': {
    width: '112px',
    height: '112px'
  },

  [theme.breakpoints.down('sm')]: {
    padding: 16,
    textAlign: 'center',
    '& svg': {
      width: '100px',
      height: '100px'
    }
  }
}));

const EmptyWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
});

const WifiAnimation = styled(Box)({
  opacity: 0,
  animation: 'wifiAnimation 3s infinite',
  path: {
    fill: GLOBAL_COLORS.gold
  },

  '@keyframes wifiAnimation': {
    '0%': { opacity: 0.8 },
    '5%': { opactiy: 1 },
    '6%': { opactiy: 0.5 },
    '100%': { opactiy: 0.5 }
  }
});

const Dot = styled(Box)({
  width: 20,
  height: 20,
  background: GLOBAL_COLORS.gold,
  borderRadius: 10,
  marginTop: 8
});

const Common = {
  CenteredWrapper,
  CardActionArea,
  IconWrapper,
  EmptyWrapper,
  WifiAnimation,
  Dot
};

export default Common;
