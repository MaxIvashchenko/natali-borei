import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { Common, MainPage } from '@src/blocks';
import { IconComponent } from '@src/componets/Common';
import { paths, PRICE_FORMAT } from '@src/constants';
import { data } from '@src/content';
import { CategoryType, ShopItem } from '@src/types';
import _isEmpty from 'lodash/isEmpty';

import { imgLoader } from 'utils';

type MenuTableProps = {
  items: ShopItem[];
};

const AdminPage = ({ items = [] }: MenuTableProps) => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const [filter, setFilter] = useState<string>('all');
  const [menuList, setMenuList] = useState<ShopItem[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setMenuList(items);
  }, [items]);

  const list =
    filter === 'all'
      ? menuList
      : menuList.filter((item) => item.tag === filter);

  const filterHandler = (e: SelectChangeEvent<CategoryType | string>) =>
    setFilter(e.target.value);

  const addItemHandler = () => router.push(paths.addItem);

  const deleteItem = async () => {
    // setIsLoading(true);
    // try {
    //   await fetcher('/api/menu-item/delete', id, 'POST');
    //   dispatch(
    //     setMessage({ type: 'success', message: 'Item deleted successfully' })
    //   );
    //   const updatedList = () => menuList.filter((item) => item.id !== id);
    //   setMenuList(updatedList);
    // } catch (error) {
    //   console.error(error);
    //   dispatch(setMessage({ type: 'error', message: 'Something went wrong' }));
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const editHandler = (id: string) =>
    router.push({
      pathname: paths.editItem,
      query: { id }
    });

  const filerList = ['all', ...Object.values(CategoryType)];

  return (
    <MainPage.PageContainer>
      {/* {isLoading ? <Loader /> : <div />} */}

      <Grid container justifyContent='space-between' alignItems='center' my={2}>
        <Grid item sx={{ display: 'flex' }}>
          <Typography
            mr={2}
            alignSelf='center'
            variant='h5'
            color='common.black'
          >
            Фильтровать по категории
          </Typography>
          <Select
            inputProps={{
              name: 'tag',
              id: 'tag'
            }}
            value={filter}
            onChange={filterHandler}
          >
            {filerList.map((item) => (
              <MenuItem key={item} value={item}>
                {t(`categories.${item}`)}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item sx={{ display: 'flex' }}>
          <Button
            variant='text'
            endIcon={<IconComponent name='plus' />}
            onClick={addItemHandler}
          >
            Добавить украшение
          </Button>
        </Grid>
      </Grid>
      {_isEmpty(list) ? (
        <Common.EmptyWrapper>
          <Typography
            variant='h4'
            textAlign='center'
            py={2}
            sx={{ py: 2, px: { xs: 1, sm: 8, md: 12 } }}
          >
            Категория пуста, нужно добавить украшение для данной категории
          </Typography>
        </Common.EmptyWrapper>
      ) : (
        <TableContainer component={Box}>
          <Table sx={{ width: '100%' }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='right'></TableCell>
                <TableCell>Название</TableCell>
                <TableCell align='center'>Категория</TableCell>
                <TableCell align='center'>Доступность</TableCell>
                <TableCell align='center'>Цена</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='left' component='th' scope='row'>
                    <Image
                      src={row.images[0]}
                      loader={imgLoader}
                      alt='Picture pizza'
                      width={100}
                      height={100}
                    />
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Stack direction='column'>
                      <Typography variant='h5'>{row.ru.name}</Typography>
                      <Typography>{row.en.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align='center'>
                    <Typography variant='h5'>
                      {t(`categories.${row.tag}`)}
                    </Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <Typography variant='h5'>
                      {row.available ? 'доступно' : 'нет в наличии'}
                    </Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <Typography variant='h5'>{`${row.price} ${PRICE_FORMAT}`}</Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <Tooltip title='Редактировать'>
                      <IconButton
                        aria-label='edit'
                        onClick={() => editHandler(row.id)}
                      >
                        <IconComponent name='pencil' />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell align='center'>
                    <Tooltip title='Удалить'>
                      <IconButton
                        aria-label='delete'
                        onClick={() => deleteItem()}
                      >
                        <IconComponent name='trash' />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </MainPage.PageContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => ({
  props: { items: data }
});

export default AdminPage;
