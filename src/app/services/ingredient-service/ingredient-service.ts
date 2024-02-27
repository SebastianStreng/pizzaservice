import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Ingredient } from 'src/app/interfaces/ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<{ data: Ingredient[] }>(`${this.baseUrl}/ingredients`)
      .pipe(
        tap((r) => console.log(r)),
        map((response) => response.data),
        map((ingredients) =>
          ingredients.map((ingredient) => ({
            name: ingredient.name,
            vegan: ingredient.vegan,
            price: Number(ingredient.price),
          }))
        ),
        catchError((error: any) => {
          console.error('Error fetching data:', error);
          return throwError(() => new Error('Error fetching data'));
        })
      );
  }
}
