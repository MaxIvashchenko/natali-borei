import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainPage } from '@src/blocks';
import { GLOBAL_COLORS } from '@src/constants';

const ErrorNumber = styled(Typography)(({ theme }) => ({
  color: GLOBAL_COLORS.darkBlue,
  fontSize: 200,
  lineHeight: '200px',
  fontWeight: 400,

  [theme.breakpoints.down('sm')]: {
    fontSize: 120,
    lineHeight: '120px'
  }
}));

const ErrorText = styled(Typography)(({ theme }) => ({
  color: GLOBAL_COLORS.darkBlue,
  fontSize: 32,
  fontWeight: 700,
  textAlign: 'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: 32,
    lineHeight: '40px'
  }
}));

const NotFound = () => {
  const { t } = useTranslation('common');

  return (
    <MainPage.PageContainer bg={GLOBAL_COLORS.lightBlue}>
      <Stack
        spacing={2}
        style={{ flex: 1 }}
        justifyContent='center'
        alignItems='center'
        mb={16}
      >
        <ErrorNumber variant='h1' pb={{ xs: 0, md: 4 }}>
          404
        </ErrorNumber>
        <ErrorText>{t('common.notFoundPage')}</ErrorText>
      </Stack>
    </MainPage.PageContainer>
  );
};

export default NotFound;
