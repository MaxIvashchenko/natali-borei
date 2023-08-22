import React, { useMemo } from 'react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Button, Grid, Typography } from '@mui/material';
import { CardImage } from '@src/componets/ShopPage';
import { paths } from '@src/constants';
import { data } from '@src/content';
import { ShopItem } from '@src/types';

const popularIds: string[] = ['BRC002', 'NEC001', 'PEN004', 'NEC005'];

const PopularItems = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

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
          {t('main.poularTitle')}
        </Typography>
      </Grid>
      {items.map((item) => (
        <Grid
          item
          xs={6}
          md={3}
          key={`popular-${item.ru.name}-${item.id}`}
          sx={{ p: { xs: 1, sm: 3 } }}
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
