import React, { memo } from 'react';
import { Badge, IconButton, Typography } from '@mui/material';
import { IconComponent } from '@src/componets/Common';
import { GLOBAL_COLORS } from '@src/constants';

interface FavoriteIconProps {
  onClick: () => void;
  isActive?: boolean;
  qty?: number;
}

const FavoriteIcon = ({
  onClick,
  isActive = false,
  qty = 0
}: FavoriteIconProps) => (
  <IconButton onClick={onClick} style={{ position: 'relative' }}>
    <IconComponent
      name={isActive ? 'favoriteFill' : 'favorite'}
      fill={GLOBAL_COLORS.gold}
    />
    {Boolean(qty) && <Typography color='white' pb={0.5} pl={0.2} style={{ position: 'absolute' }}>{qty}</Typography>}
  </IconButton>
);

export default memo(FavoriteIcon);
