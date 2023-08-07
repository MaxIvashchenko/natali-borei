import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import {
  Box,
  Collapse,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';
import { IconComponent } from '@src/componets/Common';
import { paths } from '@src/constants';
import { CATEGORIES } from '@src/content';
import { IconTypes } from '@src/types';

interface DrawerProps {
  isOpen: boolean;
  handleClick: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  handleClose: () => void;
}

interface DrawerMenu {
  label: string;
  path: string;
  icon: keyof IconTypes;
}

const menu: DrawerMenu[] = [
  {
    label: 'home',
    path: paths.main,
    icon: 'home'
  },
  {
    label: 'about',
    path: paths.about,
    icon: 'cube'
  },
  {
    label: 'shop',
    path: paths.shop,
    icon: 'cube'
  }
];

const Drawer = ({ isOpen, handleClick, handleClose }: DrawerProps) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(true);

  const toggleHandler = () => {
    setOpen(!open);
  };

  const pagesHanddler = useCallback(
    (path: string) => () => {
      router.push(path);
      handleClose();
    },
    [handleClose, router]
  );

  const categoriesHanddler = useCallback(
    (tag: string) => () => {
      router.push({
        pathname: paths.shop,
        query: { tag }
      });
      handleClose();
    },
    [handleClose, router]
  );

  return (
    <MuiDrawer anchor='left' open={isOpen} onClose={handleClick(false)}>
      <Box sx={{ width: 200 }} role='presentation'>
        <List>
          {menu.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={pagesHanddler(item.path)}>
                <ListItemText>
                  <Typography variant='h5'>
                    {t(`header.${item.label}`)}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItemButton key='categories' onClick={toggleHandler}>
            <ListItemText>
              <Typography variant='h5'>{t(`header.categories`)}</Typography>
            </ListItemText>
            <Box sx={{ pt: 1 }}>
              <IconComponent
                name='up'
                width={14}
                height={14}
                fill='grey'
                isMirror={!open}
              />
            </Box>
          </ListItemButton>
          <Collapse in={open} timeout='auto' unmountOnExit>
            {CATEGORIES.map((item) => (
              <ListItem sx={{ pl: 4 }} key={item.tag} disablePadding>
                <ListItemButton onClick={categoriesHanddler(item.tag)}>
                  <ListItemText>
                    <Typography variant='h5'>
                      {t(`categories.${item.tag}`)}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </Collapse>
        </List>
      </Box>
    </MuiDrawer>
  );
};

export default memo(Drawer);
