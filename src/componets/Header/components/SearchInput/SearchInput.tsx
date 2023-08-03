import React, { ChangeEvent, useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { IconComponent } from '@src/componets';
import { GLOBAL_COLORS } from '@src/constants';

const SearchInput = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const clearInput = () => setSearchValue('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  return (
    <Stack direction='row'>
      <Collapse orientation='horizontal' in={checked}>
        <TextField
          fullWidth
          size='small'
          InputProps={{
            endAdornment: (
              <IconButton onClick={clearInput}>
                <IconComponent name='close' width={14} height={14} />
              </IconButton>
            )
          }}
          value={searchValue}
          onChange={onChange}
          sx={{ width: 179 }}
        />
      </Collapse>

      <IconButton aria-label='close' color='inherit' onClick={handleChange}>
        <IconComponent name='search' fill={GLOBAL_COLORS.gold} />
      </IconButton>
    </Stack>
  );
};

export default SearchInput;
