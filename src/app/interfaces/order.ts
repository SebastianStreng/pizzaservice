import { ingredient } from './ingredient';

export interface order {
  id: number; 
  ingredients: ingredient[];
  price: number;
  specialWish: string;
}
