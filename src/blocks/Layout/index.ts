import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const AppWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflowX: 'hidden',
  background: '#fff',
  minHeight: '100vh'
});

const ContentWrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: '100%',
  height: '100%',
  paddingTop: 80,
  maxWidth: 1920
});

const LayoutWrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

const PageContainer = styled(Box)(({ theme }) => ({
  padding: '32px 48px',

  [theme.breakpoints.up('lg')]: {
    padding: '32px 64px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '24px 32px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px'
  },

  '&::-webkit-scrollbar': {
    display: 'none'
  }
}));

const Layout = {
  AppWrapper,
  ContentWrapper,
  LayoutWrapper,
  PageContainer
};

export default Layout;
