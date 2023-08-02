import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Grid, Typography } from '@mui/material';
import { MainPage } from '@src/blocks';
import { CardImage, ShopNavigation } from '@src/componets';
import { paths } from '@src/constants';
import { CATEGORIES, data } from '@src/content';
import _get from 'lodash/get';

const ShopPage = () => {
  const router = useRouter();
  const tag = _get(router, 'query.tag', CATEGORIES[0].tag);

  const list = useMemo(() => data.filter((item) => item.tag === tag), [tag]);

  const onCardDetails = useCallback(
    (id?: string) => () => router.push(paths.shop + '/' + id),
    [router]
  );

  return (
    <MainPage.PageContainer>
      <Grid container>
        <Grid
          item
          md={2}
          sx={{
            overflowX: 'scroll',
            margin: '0 auto',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <ShopNavigation />
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
