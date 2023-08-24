import { useRouter } from 'next/router';
import { Button, Grid } from '@mui/material';
import { MainPage } from '@src/blocks';
import { IconComponent } from '@src/componets';
import { paths } from '@src/constants';

const AdminPage = () => {
  const router = useRouter();

  const addItemHandler = () => router.push(paths.addItem);

  return (
    <MainPage.PageContainer>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 4 }}
        rowSpacing={2}
        alignItems='center'
      >
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6} textAlign='right'>
          <Button
            variant='text'
            onClick={addItemHandler}
            endIcon={<IconComponent name='plus' />}
          >
            Добавить украшение
          </Button>
        </Grid>
      </Grid>
    </MainPage.PageContainer>
  );
};

export default AdminPage;
