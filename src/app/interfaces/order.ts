import { Base } from './base';
import { Ingredient } from './ingredient';

export interface Order {
  id: number; 
  base: Base[],
  ingredients: Ingredient[];
  price: number;
  specialWish: string;
}
