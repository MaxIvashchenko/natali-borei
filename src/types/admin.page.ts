import { CategoryType } from './content';

export interface ItemFormProps {
  tag: CategoryType;
  dimension: string;
  price: number;
  available: boolean;
  img: string;
  ru_name: string;
  ru_description: string;
  ru_material: string;
  en_name: string;
  en_description: string;
  en_material: string;
}
