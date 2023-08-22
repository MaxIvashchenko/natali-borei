import React, { SyntheticEvent, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Autocomplete, IconButton, Stack, TextField } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { IconComponent } from '@src/componets';
import { GLOBAL_COLORS, paths } from '@src/constants';
import { data } from '@src/content';
import { useAppSelector } from '@src/store/hooks';
import { appSelector } from '@src/store/slices/appSlice';
import { ShopItem } from '@src/types';
import _get from 'lodash/get';

const SearchInput = () => {
  const router = useRouter();
  const { language } = useAppSelector(appSelector);
  const { t } = useTranslation('common');
  const [checked, setChecked] = useState<boolean>(false);

  const openHandler = () => {
    setChecked((prev) => !prev);
  };

  const reedirectHandler = useCallback(
    (_: SyntheticEvent<Element, Event>, id: string | null, status: string) => {
      if (status !== 'clear') {
        router.push(paths.shop + '/' + id);
        setA('');
        setChecked(false);
      }
    },
    [router]
  );

  const options = useMemo(() => data.map(({ id }) => id), []);

  const getItem = useCallback(
    (id: string): ShopItem =>
      data.find(({ id: idx }) => id === idx) as ShopItem,
    []
  );

  const getItemsKey = useCallback(
    (id: string, key: string): string => {
      const item = getItem(id);

      return _get(item, key, '');
    },
    [getItem]
  );

  const getGroup = useCallback(
    (id: string) => {
      const tag = getItemsKey(id, 'tag');

      return t(`categories.${tag}`);
    },
    [getItemsKey, t]
  );

  const [a, setA] = useState<string>('');

  return (
    <Stack direction='row'>
      <Collapse orientation='horizontal' in={checked}>
        <Autocomplete
          value={a}
          freeSolo
          id='find-item'
          options={options}
          defaultValue={options[0]}
          getOptionLabel={(id) => getItemsKey(id, `${language}.name`)}
          renderOption={(props, id) => (
            <li {...props} key={id}>
              {getItemsKey(id, `${language}.name`)}
            </li>
          )}
          groupBy={getGroup}
          sx={{ width: 179 }}
          renderInput={(params) => <TextField {...params} />}
          onChange={reedirectHandler}
        />
      </Collapse>

      <IconButton aria-label='close' color='inherit' onClick={openHandler}>
        <IconComponent name='search' fill={GLOBAL_COLORS.gold} />
      </IconButton>
    </Stack>
  );
};

export default SearchInput;
