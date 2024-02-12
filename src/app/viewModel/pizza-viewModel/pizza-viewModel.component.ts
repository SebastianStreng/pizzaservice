import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { catchError, map, tap, throwError } from 'rxjs';
import { Pizza } from 'src/app/interfaces/pizza';
import { PizzaService } from 'src/app/services/pizza-service/pizza-service';

@Component({
  selector: 'app-pizza-view-model',
  standalone: false,
  templateUrl: './pizza-viewModel.component.html',
  styleUrls: ['./pizza-viewModel.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaViewModelComponent implements OnInit {
  pizzas: Pizza[] = [];
  error = '';
  success = ''

  selectedPizza!: Pizza

  sortOrder!: number;
  sortOptions!: SelectItem[];
  sortField!: string;

  constructor( private client: HttpClient, private pizzaservice: PizzaService) {
  }

  baseUrl = 'http://localhost/api';

  ngOnInit() { 
    this.getPizzas(); 

    this.sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' }
    ];
     
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

  getPizzas(): void {
    this.pizzaservice.getAll().subscribe({
      next: (data: Pizza[]) => {
        this.pizzas = data;
        this.success = "Successful retrieval of the pizzas";
      },
      error: (err) => {
        console.error(err);
        this.error = "An error occurred while fetching data";
      },
      // Optional: complete callback, falls du eine Aktion ausführen willst, wenn das Observable fertig ist
      complete: () => console.log('Pizzas fetch complete') 
    });
  }
}
