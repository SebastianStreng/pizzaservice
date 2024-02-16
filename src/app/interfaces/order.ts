import { Ingredient } from './ingredient';

export interface Order {
  id: number; 
  ingredients: Ingredient[];
  price: number;
  specialWish: string;
}
