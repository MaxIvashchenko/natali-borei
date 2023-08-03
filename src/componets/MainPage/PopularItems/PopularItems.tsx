import React, { useMemo } from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Button, Grid, Typography } from '@mui/material';
import { CardImage } from '@src/componets/ShopPage';
import { paths } from '@src/constants';
import { data } from '@src/content';
import { ShopItem } from '@src/types';

const popularIds: string[] = ['LB007', 'BR002', 'BR011', 'LB003'];

const PopularItems = () => {
  const router = useRouter();

  const onCardDetails = useCallback(
    (id?: string) => () => router.push(paths.shop + '/' + id),
    [router]
  );

  const items = useMemo(
    () => data.filter((item: ShopItem) => popularIds.includes(item.id)),
    []
  );

  return (
    <Grid
      container
      justifyContent='center'
      sx={{ maxWidth: 1220, margin: '24px auto' }}
    >
      <Grid item xs={12}>
        <Typography textAlign='center' variant='h3'>
          Популярные модели
        </Typography>
      </Grid>
      {items.map((item) => (
        <Grid
          item
          xs={6}
          md={3}
          key={`popular-${item.ru.name}`}
          sx={{ p: { xs: 1, md: 3 } }}
        >
          <Button variant='wrapper' fullWidth onClick={onCardDetails(item.id)}>
            <CardImage image={item.images[0]} name={item.ru.name} />
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default PopularItems;
