import { Typography } from '@mui/material';
import { MainPage } from '@src/blocks';
import { useAppSelector } from '@src/store/hooks';
import { appSelector } from '@src/store/slices/appSlice';
import _isEmpty from 'lodash/isEmpty';

const FavoritesPage = () => {
  const { favoritesList } = useAppSelector(appSelector);

  return (
    <MainPage.PageContainer sx={{ maxWidth: 1220, margin: '0 auto' }}>
      {_isEmpty(favoritesList) ? <Typography>empty text</Typography> : <></>}
    </MainPage.PageContainer>
  );
};

export default FavoritesPage;
