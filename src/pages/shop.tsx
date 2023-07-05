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
  borderRight: '1px solid grey',

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

  '&:hover': {
    color: active ? GLOBAL_COLORS.gold : GLOBAL_COLORS.brown
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

  return (
    <MainPage.PageContainer>
      <Grid container>
        <Grid item md={3}>
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
        <Grid item md={9}>
          <Grid container spacing={2}>
            {list.map((item) => (
              <Grid item md={4}>
                <Box
                  px={4}
                  mb={2}
                  // onClick={() => console.log(item.ru.name)}
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
