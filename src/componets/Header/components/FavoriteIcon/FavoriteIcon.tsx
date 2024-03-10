import React, { memo } from 'react';
import { IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/componets/Common';
import { GLOBAL_COLORS } from '@src/constants';

const BadgeText = styled(Typography)({
  fontSize: 14,
  position: 'absolute',
  fontWeight: '600',
  fontFamily: 'Open-Sans',
  color: 'white',
  paddingLeft: 1,
  paddingTop: 1
});

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
    {Boolean(qty) && <BadgeText>{qty}</BadgeText>}
  </IconButton>
);

export default memo(FavoriteIcon);
