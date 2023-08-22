import React, { SyntheticEvent, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Autocomplete, Box, TextField } from '@mui/material';
import { paths } from '@src/constants';
import { data } from '@src/content';
import { useAppSelector } from '@src/store/hooks';
import { appSelector } from '@src/store/slices/appSlice';
import { ShopItem } from '@src/types';
import _get from 'lodash/get';

interface SearchInputProps {
  fullWidth?: boolean;
  closeHandler: () => void;
}

const SearchInput = ({ fullWidth, closeHandler }: SearchInputProps) => {
  const router = useRouter();
  const { language } = useAppSelector(appSelector);
  const { t } = useTranslation('common');

  const [searchValue, setSearchValue] = useState<string>('');

  const reedirectHandler = useCallback(
    (_: SyntheticEvent<Element, Event>, id: string | null, status: string) => {
      if (status !== 'clear') {
        router.push(paths.shop + '/' + id);
        setSearchValue('');
        closeHandler();
      }
    },
    [router, closeHandler]
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

  return (
    <Box p={1}>
      <Autocomplete
        value={searchValue}
        freeSolo
        clearOnBlur
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
        sx={{ width: fullWidth ? '100%' : 180 }}
        renderInput={(params) => <TextField {...params} />}
        onChange={reedirectHandler}
      />
    </Box>
  );
};

export default SearchInput;
