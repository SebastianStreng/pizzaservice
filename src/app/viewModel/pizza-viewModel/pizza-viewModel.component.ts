import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
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

  constructor( private client: HttpClient, private pizzaservice: PizzaService) {
  }

  baseUrl = 'http://localhost/api';

  ngOnInit() { 
    this.getPizzas(); 
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
