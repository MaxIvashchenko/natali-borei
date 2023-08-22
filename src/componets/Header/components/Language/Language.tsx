import React, { MouseEvent, useState } from 'react';
import { IconButton, Menu, MenuItem, Stack } from '@mui/material';
import { IconComponent } from '@src/componets';
import { GLOBAL_COLORS, LANGUAGES } from '@src/constants';
import { useAppDispatch } from '@src/store/hooks';
import { setLanguage } from '@src/store/slices/appSlice';
import { LangEnum } from '@src/types';

const Language = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type?: LangEnum) => () => {
    if (type) {
      dispatch(setLanguage(type));
    }
    setAnchorEl(null);
  };

  return (
    <Stack direction='row'>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose()}
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
        {LANGUAGES.map(({ name, type }) => (
          <MenuItem
            key={name}
            value={name}
            onClick={handleClose(type)}
            selected={name === 'Русский'}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>

      <IconButton
        aria-label='close'
        color='inherit'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IconComponent name='globe' fill={GLOBAL_COLORS.gold} />
      </IconButton>
    </Stack>
  );
};

export default Language;
