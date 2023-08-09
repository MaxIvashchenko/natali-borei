import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { MainPage } from '@src/blocks';
import { CardImage } from '@src/componets';
import { IMAGES } from '@src/constants';

const AboutPage = () => {
  const { t } = useTranslation('common');

  const blocks = {
    autor: {
      title: t('aboutAuthor.autor.title'),
      img: IMAGES.AUTHOR,
      text1: t('aboutAuthor.autor.text1'),
      text2: t('aboutAuthor.autor.text2'),
      text3: t('aboutAuthor.autor.text3')
    },
    materials: {
      title: t('aboutAuthor.materials.title'),
      img: IMAGES.MATERIALS,
      text1: t('aboutAuthor.materials.text1'),
      text2: t('aboutAuthor.materials.text2'),
      text3: t('aboutAuthor.materials.text3')
    }
  };

  return (
    <MainPage.PageContainer>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 4 }}
        rowSpacing={2}
        alignItems='center'
        justifyContent={{ xs: 'center', md: 'space-between' }}
      >
        <Grid item xs={11} sm={6}>
          <Typography variant='h2' pb={1}>
            {blocks.autor.title}
          </Typography>
          <Typography variant='h5'>{blocks.autor.text1}</Typography>
          <Typography variant='h5'>{blocks.autor.text2}</Typography>
          <Typography variant='h5'>{blocks.autor.text3}</Typography>
        </Grid>
        <Grid item xs={11} sm={5}>
          <CardImage
            heightProportion={1.5}
            image={blocks.autor.img}
            name='autor'
          />
        </Grid>
        <Grid item xs={11} sm={5}>
          <CardImage image={blocks.materials.img} name='autor' />
        </Grid>
        <Grid item xs={11} sm={6}>
          <Typography variant='h2' pb={1}>
            {blocks.materials.title}
          </Typography>
          <Typography variant='h5'>{blocks.materials.text1}</Typography>
          <Typography variant='h5'>{blocks.materials.text2}</Typography>
          <Typography variant='h5'>{blocks.materials.text3}</Typography>
        </Grid>
      </Grid>
    </MainPage.PageContainer>
  );
};

export default AboutPage;
