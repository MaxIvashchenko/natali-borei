import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Button, Grid } from '@mui/material';
import { MainPage } from '@src/blocks';
import { ShopPage as ShopPageBlock } from '@src/blocks';
import { CardImage, ShopNavigation } from '@src/componets';
import { paths } from '@src/constants';
import { CATEGORIES, data } from '@src/content';
import _get from 'lodash/get';

const { NavContainer } = ShopPageBlock;

const ShopPage = () => {
  const router = useRouter();
  const tag = _get(router, 'query.tag', CATEGORIES[0].tag);

  const list = useMemo(() => data.filter((item) => item.tag === tag), [tag]);

  const onCardDetails = useCallback(
    (id?: string) => () => router.push(paths.shop + '/' + id),
    [router]
  );

  return (
    <MainPage.PageContainer sx={{ maxWidth: 1220, margin: '0 auto' }}>
      <Grid container mb={2}>
        <NavContainer item xs={12} md={2}>
          <ShopNavigation />
        </NavContainer>
        <Grid item xs={12} md={10}>
          <Grid
            container
            justifyContent='flex-start'
            rowSpacing={{ xs: 1, sm: 3, md: 4 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {list.map((item) => (
              <Grid item xs={6} sm={4} md={4} lg={3} xl={3} key={item.id}>
                <Button
                  variant='wrapper'
                  onClick={onCardDetails(item?.id)}
                  fullWidth
                >
                  <CardImage
                    image={_get(item, 'images[0]', '')}
                    name={item.ru.name}
                    withBorder
                  />
                  {/* <Typography pt={2} textAlign='center' variant='h5'>
                    {item.ru.name}
                  </Typography> */}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </MainPage.PageContainer>
  );
};

export default ShopPage;
