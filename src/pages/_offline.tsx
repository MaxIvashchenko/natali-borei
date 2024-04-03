import { useTranslation } from 'react-i18next';
import { Stack, SxProps, Theme, Typography } from '@mui/material';
import { Common, MainPage } from '@src/blocks';
import { IconComponent } from '@src/componets/Common';
import { GLOBAL_COLORS } from '@src/constants';
import { IconTypes } from '@src/types';

type WifiItemLine = {
  name: keyof IconTypes;
  width: number;
  height: number;
  styles: SxProps<Theme>;
};

const wifiConstructor: WifiItemLine[] = [
  {
    name: 'wifiLine3',
    width: 160,
    height: 42,
    styles: { 'animation-delay': '800ms' }
  },
  {
    name: 'wifiLine2',
    width: 140,
    height: 34,
    styles: { 'animation-delay': '400ms' }
  },
  { name: 'wifiLine1', width: 120, height: 26, styles: {} }
];

const OfflinePage = () => {
  const { t } = useTranslation('common');

  return (
    <MainPage.PageContainer>
      <Stack
        spacing={2}
        style={{ flex: 1 }}
        justifyContent='center'
        alignItems='center'
      >
        <Stack alignItems='center'>
          {wifiConstructor.map(({ name, width, height, styles }) => (
            <Common.WifiAnimation key={name} height={height} sx={styles}>
              <IconComponent name={name} width={width} height={height} />
            </Common.WifiAnimation>
          ))}
          <Common.Dot />
        </Stack>
        <Typography
          variant='h2'
          textAlign='center'
          px={2}
          pt={5}
          color={GLOBAL_COLORS.gold}
        >
          {t('common.slowConnection')}
        </Typography>
        <Typography
          variant='h2'
          textAlign='center'
          px={2}
          color={GLOBAL_COLORS.gold}
        >
          {t('common.checkInternet')}
        </Typography>
      </Stack>
    </MainPage.PageContainer>
  );
};

export default OfflinePage;
