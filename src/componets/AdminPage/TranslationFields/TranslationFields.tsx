import {
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { ItemFormProps, LangEnum } from '@src/types';
import { FormikProps } from 'formik';

interface TranslationFieldsProps {
  type: LangEnum;
  formik: FormikProps<ItemFormProps>;
}

const TranslationFields = ({
  type = LangEnum.RU,
  formik
}: TranslationFieldsProps) => {
  const name = `${type}_name`;
  const description = `${type}_description`;
  const material = `${type}_material`;

  const getTitle = () => {
    switch (type) {
      case LangEnum.RU:
        return 'Добавление перевода на руссском языке';
      case LangEnum.EN:
        return 'Добавление перевода на английском языке';
      default:
        return '';
    }
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item xs={12} textAlign='left' mt={1}>
        <Typography color='common.black' variant='h4'>
          {getTitle()}
        </Typography>
      </Grid>
      <Grid item xs={12} mt={2}>
        <FormControl
          fullWidth
          error={
            formik.touched[name as keyof ItemFormProps] &&
            Boolean(formik.errors[name as keyof ItemFormProps])
          }
        >
          <TextField
            size='small'
            id={name}
            name={name}
            label='Название'
            value={formik.values[name as keyof ItemFormProps]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched[name as keyof ItemFormProps] &&
              Boolean(formik.errors[name as keyof ItemFormProps])
            }
          />
          <FormHelperText sx={{ minHeight: 16 }}>
            {formik.touched[name as keyof ItemFormProps] &&
              formik.errors[name as keyof ItemFormProps]}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl
          fullWidth
          error={
            formik.touched[description as keyof ItemFormProps] &&
            Boolean(formik.errors[description as keyof ItemFormProps])
          }
        >
          <TextField
            fullWidth
            size='small'
            id={description}
            name={description}
            label='Описание'
            value={formik.values[description as keyof ItemFormProps]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched[description as keyof ItemFormProps] &&
              Boolean(formik.errors[description as keyof ItemFormProps])
            }
          />
          <FormHelperText sx={{ minHeight: 16 }}>
            {formik.touched[description as keyof ItemFormProps] &&
              formik.errors[description as keyof ItemFormProps]}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl
          fullWidth
          error={
            formik.touched[material as keyof ItemFormProps] &&
            Boolean(formik.errors[material as keyof ItemFormProps])
          }
        >
          <TextField
            fullWidth
            size='small'
            id={material}
            name={material}
            label='Материалы'
            value={formik.values[material as keyof ItemFormProps]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched[material as keyof ItemFormProps] &&
              Boolean(formik.errors[material as keyof ItemFormProps])
            }
          />
          <FormHelperText sx={{ minHeight: 16 }}>
            {formik.touched[material as keyof ItemFormProps] &&
              formik.errors[material as keyof ItemFormProps]}
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default TranslationFields;
