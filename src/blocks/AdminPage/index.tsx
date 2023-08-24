import { Switch as MuiSwitch, SwitchProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GLOBAL_COLORS } from '@src/constants';

const Switch = styled((props: SwitchProps) => (
  <MuiSwitch
    focusVisibleClassName='.Mui-focusVisible'
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  marginLeft: 16,

  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: GLOBAL_COLORS.red,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));

const Form = styled('form')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

const AdminPageBlock = {
  Switch,
  Form
};

export default AdminPageBlock;
