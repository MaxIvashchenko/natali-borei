import { Box, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IMAGES } from '@src/constants';

const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  padding: '32px 48px',

  [theme.breakpoints.up('lg')]: {
    padding: '32px 64px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '24px 32px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: 16
  }
}));

const Banner = styled(Box)(({ theme }) => ({
  background: `grey url(${IMAGES.BANNER_BACKGROUND}) no-repeat`,
  backgroundSize: 'auto 100%',
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '8% 0 8%',

  '& img': {
    padding: '30px 0 30px'
  },
  '& p': {
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
    padding: '4% 0 4%',

    '& img': {
      height: 120,
      width: 270
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& img': {
      padding: 0,
      height: 60,
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
      'linear-gradient(90deg, white 0%, rgba(242, 242, 194, 0) 5%, rgba(242, 242, 194, 0) 95%, white 100%)'
  }
});

const ListWrapper = styled(Box)({
  display: 'flex'
});

const CategoryButton = styled(Button)(({ theme }) => ({
  padding: '20px 0',
  margin: 5,
  display: 'flex',
  flexDirection: 'column',
  width: 130,

  '.imgWrapper': {
    width: 130,
    height: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',

    '& img': {
      width: 120,
      height: 120
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: 84,
    padding: 0,
    justifyContent: 'flex-start',

    '.imgWrapper': {
      width: 85,
      height: 85,
      '& img': {
        width:75,
        height: 75
      }
    }
  }
}));

const CarouselButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'position'
})<{ position: string }>(({ theme, position }) => ({
  position: 'absolute',
  [position]: 30,
  top: '45%',
  backgroundColor: 'rgba(0,0,0,0.8)',
  borderRadius: 8,

  [theme.breakpoints.down('md')]: {
    '&:focus, &:active': {
      backgroundColor: 'rgba(0,0,0,0.7)'
    }
  }
}));

const MainPageBlock = {
  PageContainer,
  Banner,
  OuterLoopWrapper,
  InnerLoopWrapper,
  ListWrapper,
  CategoryButton,
  CarouselButton
};

export default MainPageBlock;
