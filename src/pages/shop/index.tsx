import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainPage } from '@src/blocks';
import { CardImage } from '@src/componets';
import { GLOBAL_COLORS, paths } from '@src/constants';
import { CATEGORIES, data } from '@src/content';
import _get from 'lodash/get';

const ToolBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'fixed',

  [theme.breakpoints.down('md')]: {
    display: 'inline-flex',
    position: 'inherit',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
    marginBottom: 16
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    overflow: 'scroll',
    alignItems: 'center',
    width: '100%',
    marginRight: 8,
    borderRight: 'none'
  }
}));

const ToolButton = styled(Button)<{ active: number }>(({ theme, active }) => ({
  padding: '16px 0',
  minWidth: 0,
  fontSize: 20,
  color: active ? GLOBAL_COLORS.gold : 'grey',
  justifyContent: 'flex-start',
  // whiteSpace: 'nowrap',
  // clear: 'both',
  // display: 'inline-block',

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
    justifyContent: 'center',
    paddingRight: 16
    // whiteSpace: 'nowrap',
    // clear: 'both',
    // display: 'inline-block',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
    padding: '8px 0'
  }
}));

const ShopPage = () => {
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

  const list = useMemo(() => data.filter((item) => item.tag === tag), [tag]);

  const onCardDetails = useCallback(
    (id?: string) => () => router.push(paths.shop + '/' + id),
    [router]
  );

  return (
    <MainPage.PageContainer>
      <Grid container>
        <Grid item md={2} sx={{ width: '100%' }}>
          <ToolBar>
            {CATEGORIES.map((item) => (
              <ToolButton
                key={item.tag}
                fullWidth
                variant='text'
                onClick={toolTagChange(item.tag)}
                active={Number(item.tag === tag)}
              >
                {item.label}
              </ToolButton>
            ))}
          </ToolBar>
        </Grid>
        <Grid item md={10}>
          <Grid container spacing={2}>
            {list.map((item) => (
              <Grid item xs={2} sm={2} md={4} xl={3} key={item.id}>
                <Box
                  // px={4}
                  mb={2}
                  onClick={onCardDetails(item?.id)}
                >
                  <CardImage
                    image={
                      item.variants
                        ? _get(item, 'mainImage[0]', '')
                        : _get(item, 'images[0]', '')
                    }
                    name={item.ru.name}
                  />
                  <Typography pt={2} textAlign='center' variant='h3'>
                    {item.ru.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </MainPage.PageContainer>
  );
};

export default ShopPage;
