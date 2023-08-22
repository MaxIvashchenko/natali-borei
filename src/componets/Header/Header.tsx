import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Collapse,
  Divider,
  Fade,
  IconButton,
  Stack
} from '@mui/material';
import { GLOBAL_COLORS, paths } from '@src/constants';
import { useScroll } from '@src/hooks';
import { useAppSelector } from '@src/store/hooks';
import { appSelector } from '@src/store/slices/appSlice';

import { Header as HeadersBlocks } from 'blocks';
import { IconComponent } from '../Common';
import { Drawer, FavoriteIcon, Language, SearchInput } from './components';

const {
  HeaderWrapper,
  IconWrapper,
  LogoButton,
  PaddingWrapper,
  MobileSearchWrapper,
  MobileSearchOuter
} = HeadersBlocks;

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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isDesktopMenuOpen, setDeesktopMenuOpen] = useState<boolean>(false);

  const openMobileHandler = useCallback(
    () => setMobileMenuOpen((prev) => !prev),
    []
  );

  const closeMobileHandler = useCallback(() => setMobileMenuOpen(false), []);

  const openDesktopHandler = useCallback(
    () => setDeesktopMenuOpen((prev) => !prev),
    []
  );

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
      <IconWrapper>
        <LogoButton onClick={toMainPage}>
          <IconComponent fill='#404040' name='logo' width={100} height={100} />
        </LogoButton>
      </IconWrapper>

      <PaddingWrapper className='mobile' sx={{ position: 'relative' }}>
        <IconButton
          aria-label='close'
          color='inherit'
          onClick={openMobileHandler}
          className={isMobileMenuOpen ? 'activeIcon' : ''}
        >
          <IconComponent name='search' fill={GLOBAL_COLORS.gold} />
        </IconButton>

        <FavoriteIcon
          isActive={Boolean(favoritesList.length)}
          onClick={toFavotiresPage}
          qty={favoritesList.length}
        />
        <IconButton sx={{ p: 2 }} onClick={handleClick(true)}>
          <IconComponent name='menu' fill={GLOBAL_COLORS.gold} />
        </IconButton>

        <Drawer
          isOpen={isOpen}
          handleClick={handleClick}
          handleClose={handleClose}
        />
        <MobileSearchWrapper in={isMobileMenuOpen}>
          <SearchInput fullWidth closeHandler={openMobileHandler} />
        </MobileSearchWrapper>
        <Fade in={isMobileMenuOpen}>
          <MobileSearchOuter
            variant='text'
            onTouchStart={closeMobileHandler}
            onClick={closeMobileHandler}
          />
        </Fade>
      </PaddingWrapper>

      <PaddingWrapper className='desktop'>
        <Stack direction='row'>{showLinks()}</Stack>
        <Stack direction='row'>
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
          <Divider
            orientation='vertical'
            variant='middle'
            flexItem
            sx={{ mx: 1 }}
          />
          <Collapse orientation='horizontal' in={isDesktopMenuOpen}>
            <SearchInput closeHandler={openDesktopHandler} />
          </Collapse>

          <IconButton
            aria-label='close'
            color='inherit'
            onClick={openDesktopHandler}
          >
            <IconComponent name='search' fill={GLOBAL_COLORS.gold} />
          </IconButton>
        </Stack>
      </PaddingWrapper>
    </HeaderWrapper>
  );
};

export default Header;
