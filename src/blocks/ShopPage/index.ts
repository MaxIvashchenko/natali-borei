import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const NavContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    margin: '0 auto',
    textAlign: 'center',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
}));

const ShopPageBlock = {
  NavContainer
};

export default ShopPageBlock;
