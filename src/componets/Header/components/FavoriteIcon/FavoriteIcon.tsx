import React from 'react';
import { Badge, IconButton } from '@mui/material';
import { IconComponent } from '@src/componets/Common';
import { GLOBAL_COLORS } from '@src/constants';

const qty = 0;

const FavoriteIcon = () => (
  <Badge badgeContent={qty} color='primary'>
    <IconButton>
      <IconComponent
        name={qty ? 'favoriteFill' : 'favorite'}
        fill={GLOBAL_COLORS.gold}
      />
    </IconButton>
  </Badge>
);

export default FavoriteIcon;
