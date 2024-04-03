import { Box, IconButton as MuiIconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GLOBAL_COLORS } from '@src/constants';

const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: '24px 16px',
  background: GLOBAL_COLORS.darkBlue,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px'
  }
}));

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  margin: '0 16px',

  [theme.breakpoints.down('sm')]: {
    margin: 0,

    '& svg': {
      with: 18,
      height: 18
    }
  }
}));

const Footer = {
  FooterWrapper,
  IconButton
};

export default Footer;
