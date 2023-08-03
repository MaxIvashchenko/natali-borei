import { DefaultUser } from 'next-auth';
import { ElementType } from 'react';

export interface IUserDetails extends DefaultUser {
  id: string;
  name: string;
  email: string;
  emailVerified: string;
  image: string;
  role: string;
  available_courses: string[];
}

export type ISnackbarState = {
  message: string;
  isError?: boolean;
};

export type IconTypes = {
  logo: ElementType;
  cube: ElementType;
  stats: ElementType;
  planning: ElementType;
  scaleup: ElementType;
  marketing: ElementType;
  arrow: ElementType;
  telegram: ElementType;
  facebook: ElementType;
  telephone: ElementType;
  close: ElementType;
  visible: ElementType;
  notVisible: ElementType;
  salon: ElementType;
  restaurant: ElementType;
  image: ElementType;
  triangle: ElementType;
  menu: ElementType;
  man: ElementType;
  loop: ElementType;
  shuttle: ElementType;
  suitcase: ElementType;
  youtube: ElementType;
  instagram: ElementType;
  email: ElementType;
  user: ElementType;
  loader: ElementType;
  repeat: ElementType;
  group: ElementType;
  settings: ElementType;
  right: ElementType;
  finance: ElementType;
  paper: ElementType;
  megaphone: ElementType;
  text: ElementType;
  lesson: ElementType;
  file: ElementType;
  home: ElementType;
  error: ElementType;
  success: ElementType;
  search: ElementType;
  favorite: ElementType;
  favoriteFill: ElementType;
};