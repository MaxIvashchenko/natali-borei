import { useTranslation } from 'react-i18next';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { MainPage } from '@src/blocks';
import AdminPageBlock from '@src/blocks/AdminPage';
import { TranslationFields } from '@src/componets';
import { addFormValidation, PRICE_FORMAT } from '@src/constants';
import { CATEGORIES } from '@src/content';
import { CategoryType, ItemFormProps, LangEnum } from '@src/types';
import { useFormik } from 'formik';

const { Switch, Form } = AdminPageBlock;

const initialValues: ItemFormProps = {
  tag: CategoryType.BROOCH,
  dimension: '',
  price: 0,
  available: true,
  img: '',
  ru_name: '',
  ru_description: '',
  ru_material: '',
  en_name: '',
  en_description: '',
  en_material: ''
};

const AddItemPage = () => {
  const { t } = useTranslation('common');

  const formik = useFormik<ItemFormProps>({
    initialValues,
    validationSchema: addFormValidation,
    onSubmit: async () => {}
  });

  return (
    <MainPage.PageContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Typography color='common.black' variant='h2' mb={2}>
          Добавление нового украшения
        </Typography>
        <Grid container my={1}>
          <Grid item xs={12} md={7}>
            <Stack
              direction='row'
              sx={{ width: '100%' }}
              justifyContent='flex-start'
              alignItems='center'
              spacing={2}
            >
              <FormControl
                sx={{ minWidth: 200 }}
                error={formik.touched.tag && Boolean(formik.errors.tag)}
              >
                <InputLabel htmlFor='tag'>
                  Выберите категорию из списка
                </InputLabel>
                <Select
                  label='Выберите категорию из списка'
                  id='tag'
                  name='tag'
                  value={formik.values.tag}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.tag && Boolean(formik.errors.tag)}
                >
                  {CATEGORIES.map(({ tag }) => (
                    <MenuItem key={tag} value={tag}>
                      {t(`categories.${tag}`)}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText sx={{ minHeight: 20 }}>
                  {formik.touched.tag && formik.errors.tag}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={
                  formik.touched.dimension && Boolean(formik.errors.dimension)
                }
              >
                <TextField
                  variant='outlined'
                  id='dimension'
                  name='dimension'
                  sx={{
                    // marginLeft: 8,
                    input: {
                      textAlign: 'end',
                      marginRight: 1
                    },
                    'input[type = number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button':
                      {
                        WebkitAppearance: 'none',
                        margin: 1
                      }
                  }}
                  type='text'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>см.</InputAdornment>
                    )
                  }}
                  placeholder='Размер'
                  value={formik.values.dimension}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.dimension && Boolean(formik.errors.dimension)
                  }
                />
                <FormHelperText sx={{ minHeight: 20 }}>
                  {formik.touched.dimension && formik.errors.dimension}
                </FormHelperText>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack
              direction='row'
              sx={{ width: '100%' }}
              justifyContent='flex-end'
              alignItems='center'
            >
              <FormControlLabel
                name='available'
                id='available'
                sx={{ m: 1, mr: 3, mb: 3, textWrap: 'nowrap' }}
                control={<Switch defaultChecked />}
                label={
                  formik.values.available
                    ? 'Товар доступен'
                    : 'Товар не доступен'
                }
                onChange={formik.handleChange}
                labelPlacement='start'
              />
              <FormControl
                fullWidth
                error={formik.touched.price && Boolean(formik.errors.price)}
              >
                <TextField
                  variant='outlined'
                  id='price'
                  name='price'
                  sx={{
                    input: {
                      textAlign: 'end'
                    },
                    'input[type = number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button':
                      {
                        '-webkit-appearance': 'none',
                        margin: 1
                      }
                  }}
                  type='number'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        {PRICE_FORMAT}
                      </InputAdornment>
                    )
                  }}
                  placeholder='Цена'
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.price && Boolean(formik.errors.price)}
                />
                <FormHelperText sx={{ minHeight: 20 }}>
                  {formik.touched.price && formik.errors.price}
                </FormHelperText>
              </FormControl>
            </Stack>
          </Grid>
        </Grid>
        <TranslationFields type={LangEnum.RU} formik={formik} />
        <TranslationFields type={LangEnum.EN} formik={formik} />

        <Button type='submit' sx={{ mt: 2, mx: 0, px: 6 }}>
          Добавить Украшение
        </Button>
      </Form>
    </MainPage.PageContainer>
  );
};

export default AddItemPage;
