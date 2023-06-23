import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IMAGES } from '@src/constants';

const Banner = styled(Box)(({ theme }) => ({
  background: `grey url(${IMAGES.BANNER_BACKGROUND}) no-repeat`,
  backgroundSize: 'auto 100%',
  backgroundColor: 'white',
  textAlign: 'center',

  '& img': {
    padding: '30px 0 30px'
  },
  '& p': {
    padding: '0 0 5%',
    fontSize: 24,
    fontFamily: "Cormorant Garamond",
    color: '#8e6342',
    margin: 0,
  },
  [theme.breakpoints.up('md')]: {
    '& img': {
      width: 370,
      height: 140,
    }
  },
  [theme.breakpoints.down('md')]: {
    background: 'rgba(255, 255, 255, 0.5)',

    '& img': {
      height: 120,
      width: 270
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& img': {
      height: 120,
      width: 260
    }
  },
}));

const MainPageBlock = {
  Banner
};

export default MainPageBlock;
