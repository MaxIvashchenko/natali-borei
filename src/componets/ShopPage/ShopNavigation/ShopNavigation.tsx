import React, { memo, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GLOBAL_COLORS, paths } from '@src/constants';
import { CATEGORIES } from '@src/content';
import { ICategory } from '@src/types';
import _get from 'lodash/get';

const ToolBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'fixed',

  [theme.breakpoints.down('md')]: {
    display: 'inherit',
    position: 'inherit',
    alignItems: 'center',
    overflow: 'hide',
    marginBottom: 16,
    whiteSpace: 'nowrap'
  },

  [theme.breakpoints.down('sm')]: {
    marginTop: 16,
    marginBottom: 8
  }
}));

const ToolButton = styled(Button)<{ active: number }>(({ theme, active }) => ({
  padding: '0 0 16px',
  minWidth: 0,
  fontSize: 20,
  color: active ? GLOBAL_COLORS.gold : 'grey',
  justifyContent: 'flex-start',
  borderRadius: 0,

  '&:hover': {
    color: active ? GLOBAL_COLORS.gold : GLOBAL_COLORS.brown
  },

  [theme.breakpoints.up('md')]: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: -16,
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: active ? GLOBAL_COLORS.gold : null
    }
  },
  [theme.breakpoints.down('md')]: {
    marginRight: 16,
    width: 'auto',
    borderBottom: `2px solid ${active ? GLOBAL_COLORS.gold : null}`,
    padding: '0 0 4px',
    marginBottom: 4
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
    padding: '0 0 4px',
    marginBottom: 4
  }
}));

const ShopNavigation = () => {
  const router = useRouter();
  const tag = _get(router, 'query.tag', CATEGORIES[0].tag);

  const toolTagChange = useCallback(
    (tag: string) => () =>
      router.push({
        pathname: paths.shop,
        query: { tag }
      }),
    [router]
  );

  const renderCategoryButton = useCallback(
    (item: ICategory) => (
      <ToolButton
        key={item.tag}
        fullWidth
        variant='text'
        onClick={toolTagChange(item.tag)}
        active={Number(item.tag === tag)}
      >
        {item.label}
      </ToolButton>
    ),
    [tag, toolTagChange]
  );

  return <ToolBar>{CATEGORIES.map(renderCategoryButton)}</ToolBar>;
};

export default memo(ShopNavigation);
