import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Divider,
  IconButton as MuiIconButton,
  Stack
} from '@mui/material';
import { GLOBAL_COLORS, paths } from '@src/constants';
import { useScroll } from '@src/hooks';
import { useAppSelector } from '@src/store/hooks';
import { appSelector } from '@src/store/slices/appSlice';

import { Header as HeadersBlocks } from 'blocks';
import { IconComponent } from '../Common';
import { Drawer, FavoriteIcon, Language, SearchInput } from './components';

const { HeaderWrapper, IconWrapper, LogoButton, PaddingWrapper } =
  HeadersBlocks;

const headerList: { link: string; name: string }[] = [
  {
    link: paths.shop,
    name: 'shop'
  },
  {
    link: paths.about,
    name: 'about'
  }
];

const Header = () => {
  const { t } = useTranslation('common');
  const { favoritesList } = useAppSelector(appSelector);
  const router = useRouter();
  const isScrolled = useScroll();

  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClick =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };

  const handleClose = () => {
    setOpen(false);
  };

  const toMainPage = () => router.push(paths.main);
  const toFavotiresPage = () => router.push(paths.favorites);

  const redirectHandler = (link: string) => () => router.push(link);

  const showLinks = () =>
    headerList.map(({ link, name }) => (
      <Box
        key={name}
        sx={{
          marginRight: { xs: 1, md: 2 },
          textTransform: 'uppercase',
          cursor: 'pointer',
          textAlign: 'center'
        }}
      >
        <Button
          sx={{ color: GLOBAL_COLORS.gold, px: { xs: 1, md: 3 } }}
          variant='text'
          onClick={redirectHandler(link)}
        >
          {t(`header.${name}`)}
        </Button>
      </Box>
    ));

  return (
    <HeaderWrapper scrolled={Number(isScrolled)} component='header'>
      <PaddingWrapper className='mobile'>
        <FavoriteIcon
          isActive={Boolean(favoritesList.length)}
          onClick={toFavotiresPage}
          qty={favoritesList.length}
        />
        <MuiIconButton sx={{ p: 2 }} onClick={handleClick(true)}>
          <IconComponent name='menu' fill={GLOBAL_COLORS.gold} />
        </MuiIconButton>

        <Drawer
          isOpen={isOpen}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      </PaddingWrapper>

      <PaddingWrapper className='desktop'>
        <Stack direction='row'>{showLinks()}</Stack>
        <Stack direction='row'>
          <SearchInput />
          <Divider
            orientation='vertical'
            variant='middle'
            flexItem
            sx={{ mx: 1 }}
          />
          <FavoriteIcon
            isActive={Boolean(favoritesList.length)}
            onClick={toFavotiresPage}
            qty={favoritesList.length}
          />
          <Divider
            orientation='vertical'
            variant='middle'
            flexItem
            sx={{ mx: 1 }}
          />
          <Language />
        </Stack>
      </PaddingWrapper>

      <IconWrapper>
        <LogoButton onClick={toMainPage}>
          <IconComponent fill='#404040' name='logo' width={100} height={100} />
        </LogoButton>
      </IconWrapper>
    </HeaderWrapper>
  );
};

export default Header;
