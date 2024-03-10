import { LangDetails, LangEnum } from '@src/types';

export const LANGUAGES: Array<{ name: string; type: LangEnum }> = [
  {
    name: 'Русский',
    type: LangEnum.RU
  },
  {
    name: 'English',
    type: LangEnum.EN
  }
  // {
  //   name: 'Polska',
  //   type: LangEnum.PL
  // }
];

export const DEAFULT_LANG_VALUE: LangDetails = {
  name: '',
  description: '',
  material: ''
};
