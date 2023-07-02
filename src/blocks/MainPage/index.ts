import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GLOBAL_COLORS, IMAGES } from '@src/constants';

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
    fontFamily: 'Cormorant Garamond',
    color: '#8e6342',
    margin: 0
  },
  [theme.breakpoints.up('md')]: {
    '& img': {
      width: 370,
      height: 140
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
  }
}));

const OuterLoopWrapper = styled(Box)({
  position: 'relative',
  display: 'flex',
  margin: '0 auto'
});

const InnerLoopWrapper = styled(Box)({
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  display: 'flex',

  '&::-webkit-scrollbar': {
    display: 'none'
  },

  '&::after': {
    content: "''",
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background:
      'linear-gradient(90deg, white 0%, rgba(242, 242, 194, 0) 10%, rgba(242, 242, 194, 0) 90%, white 100%)'
  }
});

const ListWrapper = styled(Box)({
  display: 'flex'
});

const CategoryButton = styled(Button)({
  padding: '20px 0',
  margin: 5,
  display: 'flex',
  flexDirection: 'column',

  '.imgWrapper': {
    borderRadius: '50%',
    border: `1px solid ${GLOBAL_COLORS.gold}`,
    width: 130,
    height: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
});

const MainPageBlock = {
  Banner,
  OuterLoopWrapper,
  InnerLoopWrapper,
  ListWrapper,
  CategoryButton
};

export default MainPageBlock;
