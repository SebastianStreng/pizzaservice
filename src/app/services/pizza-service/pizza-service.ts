import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Pizza } from '../../interfaces/pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {

    // Adjust this URL to point to your PHP script handling API requests
    baseUrl = 'http://localhost/api'; // Assuming 'api' is the folder where your PHP scripts are located

    constructor(private http: HttpClient) { }

    getAll() {
      return this.http.get(`${this.baseUrl}/list`).pipe(
        map((res: any) => {
          return res['data'];
        }),
        catchError((error: any) => {
          console.error('Error fetching data:', error);
          throw error; // Rethrow the error to propagate it further
        })
      );
    }
  
}