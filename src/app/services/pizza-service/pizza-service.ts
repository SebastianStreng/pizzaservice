import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Pizza } from '../../interfaces/pizza';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {

    // Adjust this URL to point to your PHP script handling API requests
    baseUrl = 'http://localhost/api'; // Assuming 'api' is the folder where your PHP scripts are located

    constructor(private http: HttpClient) { }

  
      getAll() {
    return this.http.get<{data: Pizza[]}>(`${this.baseUrl}/list`).pipe(
      tap(r => console.log(r)),
      map(response => response.data), // Extracting the data array from the response
      map(pizzas => pizzas.map(pizza => ({
        name: pizza.name,
        size: pizza.size, 
        price: pizza.price,
        id: pizza.id,
        imagePath: pizza.imagePath
      }))), // Converting size, price, and id to the correct types
      catchError((error: any) => {
        console.error('Error fetching data:', error);
        return throwError(() => new Error('Error fetching data'));
      })
    );
  }
}