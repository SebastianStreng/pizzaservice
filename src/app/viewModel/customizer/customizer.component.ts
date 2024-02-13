import { Component, OnInit } from '@angular/core';
import { ingredient } from 'src/app/interfaces/ingredient';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.css'],
})
export class CustomizerComponent implements OnInit {
  ingredients: ingredient[] = [];
  selectedIngredients: ingredient[] = [];

  ngOnInit(): void {
    this.ingredients = [
      { name: 'Garlic', vegan: false, price: 2 },
      { name: 'Ham', vegan: false, price: 2 },
      { name: 'Salami', vegan: false, price: 2 },
    ];
  }
}

