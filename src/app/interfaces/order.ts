import { ingredient } from './ingredient';

export interface order {
  ingredients: ingredient[];
  price: number;
  specialWish: string;
}
