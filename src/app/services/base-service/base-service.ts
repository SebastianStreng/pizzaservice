import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Base } from 'src/app/interfaces/base';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<{ data: Base[] }>(`${this.baseUrl}/base`)
      .pipe(
        tap((r) => console.log(r)),
        map((response) => response.data),
        map((bases) =>
          bases.map((base) => ({
            id: base.id,
            name: base.name,
            price: Number(base.price),
            type: base.type
          }))
        ),
        catchError((error: any) => {
          console.error('Error fetching data:', error);
          return throwError(() => new Error('Error fetching data'));
        })
      );
  }
}