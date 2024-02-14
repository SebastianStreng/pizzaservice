import { Component, OnInit } from '@angular/core';
import { ingredient } from 'src/app/interfaces/ingredient';
import { order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.css'],
})
export class CustomizerComponent implements OnInit {
  ingredients: ingredient[] = [];
  selectedIngredients: ingredient[] = [];
  order!: order;
  orders: order[] = [];
  specialWish!: string;

  AddToOrder() {
    const newOrder: order = {
      ingredients: [...this.selectedIngredients], // Erstelle eine tiefe Kopie von selectedIngredients
      price:
        8 +
        this.selectedIngredients.reduce(
          (total, ingredient) => total + ingredient.price,
          0
        ),
      specialWish: this.specialWish,
    };
    this.orders.push(newOrder);
    this.RestoreOrder();
  }

  RestoreOrder() {
    this.selectedIngredients.forEach((element) => {
      this.ingredients.unshift(element);
    });
    this.selectedIngredients = [];
    this.specialWish = ""; 
  }

  PlaceOrder() {}

  ngOnInit(): void {
    this.ingredients = [
      { name: 'Garlic', vegan: false, price: 2 },
      { name: 'Ham', vegan: false, price: 2 },
      { name: 'Tomato', vegan: false, price: 2 },
      { name: 'Pepper', vegan: false, price: 2 },
      { name: 'Mozarella', vegan: false, price: 2 },
      { name: 'Cheese', vegan: false, price: 2 },
      { name: 'Basil', vegan: false, price: 2 },
      { name: 'Chilli', vegan: false, price: 2 },
      { name: 'Sausages', vegan: false, price: 2 },
      { name: 'Corn', vegan: false, price: 2 },
      { name: 'Mushroom', vegan: false, price: 2 },
    ];
  }
}