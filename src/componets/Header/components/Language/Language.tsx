import React, { MouseEvent, useState } from 'react';
import { IconButton, Menu, MenuItem, Stack } from '@mui/material';
import { IconComponent } from '@src/componets';
import { GLOBAL_COLORS } from '@src/constants';

const Language = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <Stack direction='row'>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            px: 1,
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {['Русский', 'English', 'Polska'].map((name) => (
          <MenuItem
            key={name}
            value={name}
            onClick={handleClose}
            selected={name === 'Русский'}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>

      <IconButton aria-label='close' color='inherit' onClick={handleClick}>
        <IconComponent name='globe' fill={GLOBAL_COLORS.gold} />
      </IconButton>
    </Stack>
  );
};

export default Language;
