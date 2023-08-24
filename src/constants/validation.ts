import * as Yup from 'yup';

export const addFormValidation = Yup.object({
  tag: Yup.string().required('Обязательно поле для ввода'),
  dimension: Yup.string().required('Обязательно поле для ввода'),
  price: Yup.number()
    .min(1, 'Нужно задать цену')
    .required('Обязательно поле для ввода'),
  available: Yup.string().required('Обязательно поле для ввода'),
  img: Yup.string(),
  ru_name: Yup.string().required('Обязательно поле для ввода'),
  ru_material: Yup.string().required('Обязательно поле для ввода'),
  ru_description: Yup.string().required('Обязательно поле для ввода'),
  en_name: Yup.string().required('Обязательно поле для ввода'),
  en_material: Yup.string().required('Обязательно поле для ввода'),
  en_description: Yup.string().required('Обязательно поле для ввода')
});
