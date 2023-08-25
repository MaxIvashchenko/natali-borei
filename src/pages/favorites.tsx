import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Button, Grid, Typography } from '@mui/material';
import { Common, MainPage } from '@src/blocks';
import { CardImage } from '@src/componets';
import { paths } from '@src/constants';
import { data } from '@src/content';
import { useAppSelector } from '@src/store/hooks';
import { appSelector } from '@src/store/slices/appSlice';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';

const FavoritesPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { favoritesList } = useAppSelector(appSelector);

  const onCardDetails = useCallback(
    (id?: string) => () => router.push(paths.shop + '/' + id),
    [router]
  );

  const list = data.filter(({ id }) => favoritesList.includes(id));

  return (
    <MainPage.PageContainer sx={{ maxWidth: 1220, margin: '0 auto' }}>
      {_isEmpty(list) ? (
        <Common.EmptyWrapper>
          <Typography
            variant='h4'
            textAlign='center'
            py={2}
            sx={{ py: 2, px: { xs: 1, sm: 8, md: 12 } }}
          >
            {t('common.favoriteEmptyText')}
          </Typography>
        </Common.EmptyWrapper>
      ) : (
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
                />
                {/* <Typography pt={2} textAlign='center' variant='h5'>
                {item.ru.name}
              </Typography> */}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </MainPage.PageContainer>
  );
};

export default FavoritesPage;
