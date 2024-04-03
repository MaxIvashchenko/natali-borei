import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainPage } from '@src/blocks';
import { FavoriteIcon } from '@src/componets/Header';
import { GLOBAL_COLORS, paths } from '@src/constants';
import { data } from '@src/content';
import { useWindowSize } from '@src/hooks';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { appSelector, handleFavoriteItem } from '@src/store/slices/appSlice';
import { getPriceFormat, imgLoader } from '@src/utils';
import cookies from '@src/utils/cookies';
import _get from 'lodash/get';

const Wrapper = styled(Box)(({ theme }) => ({
  borderBottom: '1px solid grey',

  [theme.breakpoints.down('sm')]: {}
}));

const ItemDetails = () => {
  const { favoritesList } = useAppSelector(appSelector);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('common');
  const router = useRouter();
  const { id } = router.query;

  const item = data.find((items) => items.id === id);

  const getColor = (isAvailable?: boolean) =>
    isAvailable ? GLOBAL_COLORS.greenPrice : GLOBAL_COLORS.redPrice;

  const onShopRedirect = () =>
    router.push({
      pathname: paths.shop,
      query: { tag: item?.tag }
    });

  const onMainRedirect = () => router.push(paths.main);

  const [height, setHeight] = useState<number>(0);
  const size = useWindowSize();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageCover = _get(item, 'images[0]', '');

  useEffect(() => {
    if (imageRef?.current) {
      setHeight(imageRef?.current?.clientWidth);
    }
  }, [size]);

  const isActive = useMemo(
    () => favoritesList.some((existId) => existId === id),
    [favoritesList, id]
  );

  const favIconHandler = () => {
    cookies.setProductToFavorite(id as string);
    dispatch(handleFavoriteItem(id as string));
  };

  return (
    <MainPage.PageContainer>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb: { xs: 2, md: 3 } }}
      >
        <Breadcrumbs aria-label='breadcrumb'>
          <Button
            variant='text'
            style={{ padding: 0, minWidth: 0 }}
            onClick={onMainRedirect}
          >
            Главная
          </Button>
          <Button
            variant='text'
            style={{ padding: 0, minWidth: 0 }}
            onClick={onShopRedirect}
          >
            {t(`categories.${item?.tag}`)}
          </Button>
          <Typography color='text.primary'>{item?.ru.name}</Typography>
        </Breadcrumbs>
        <FavoriteIcon isActive={isActive} onClick={favIconHandler} />
      </Stack>

      <Grid container>
        <Grid item xs={12} md={6} sx={{ pr: { xs: 0, md: 3 } }}>
          <Wrapper
            pb={2}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end'
            }}
          >
            <Typography variant='h2'>{item?.ru.name}</Typography>
            <Typography>{item?.id}</Typography>
          </Wrapper>
          <Wrapper py={2}>
            <Typography variant='h2' mb={1}>
              {t('shop.showItem.price')}
            </Typography>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography color={getColor(item?.available)} variant='h3'>
                {getPriceFormat(item?.price)}
              </Typography>
              <Typography color={getColor(item?.available)} variant='h3'>
                {t(`shop.filter.${item?.available ? 'available' : 'sold'}`)}
              </Typography>
            </Box>
          </Wrapper>
          <Wrapper py={2}>
            <Typography variant='h2' mb={1}>
              {t('shop.showItem.description')}
            </Typography>
            <Typography variant='h5'>{item?.ru?.description}</Typography>
          </Wrapper>
          <Wrapper py={2}>
            <Typography variant='h2' mb={1}>
              {t('shop.showItem.material')}
            </Typography>
            <Typography variant='h5'>{item?.ru?.material}</Typography>
          </Wrapper>
          <Box py={1}>
            <Typography variant='h2' mb={1}>
              {t('shop.showItem.measurements')}
            </Typography>
            <Typography variant='h5'>{`${item?.dimensions} ${t(
              'shop.filter.dimension'
            )}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{}}>
          <Box
            sx={{
              position: 'relative',
              height,
              maxWidth: 500,
              marginLeft: 'auto'
            }}
          >
            <Image
              ref={imageRef}
              loader={imgLoader}
              src={imageCover}
              alt={item?.ru.name + '-photo'}
              fill
              style={{ objectFit: 'cover' }}
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </Box>
        </Grid>
      </Grid>
    </MainPage.PageContainer>
  );
};

export default ItemDetails;
