import React, { memo } from 'react';
import { Badge, IconButton } from '@mui/material';
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
  <Badge badgeContent={qty} color='primary'>
    <IconButton onClick={onClick}>
      <IconComponent
        name={isActive ? 'favoriteFill' : 'favorite'}
        fill={GLOBAL_COLORS.gold}
      />
    </IconButton>
  </Badge>
);

export default memo(FavoriteIcon);
