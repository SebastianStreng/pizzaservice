import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Pizza } from '../../interfaces/pizza';
import { throwError } from 'rxjs';
import { User } from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Adjust this URL to point to your PHP script handling API requests
  baseUrl = 'http://localhost/api'; // Assuming 'api' is the folder where your PHP scripts are located

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<{ data: any[] }>(`${this.baseUrl}/user`).pipe(
      tap((r) => console.log(r)),
      map((response) => response.data),
      map((users) =>
        users.map(
          (user) =>
            ({
              id: user.id,
              username: user.username,
              password: user.password,
              firstName: user.firstName,
              lastName: user.lastName,
              streetName: user.streetName,
              houseNumber: user.houseNumber,
              postalCode: user.postalCode,
              city: user.city,
            } as User)
        )
      ),
      catchError((error: any) => {
        console.error('Error fetching data:', error);
        return throwError(() => new Error('Error fetching data'));
      })
    );
  }

  store(user: User) {
    return this.http.post(`${this.baseUrl}/store`, { data: user }).pipe(
      tap((res: any) => {
        console.log('Response from store:', res);
        return res['data'];
      }),
      catchError((error) => {
        console.error('Error in store:', error);
        return throwError(error);
      })
    );
  }

  update(user: User) {
    return this.http.put(`${this.baseUrl}/update`, { data: user });
  }
}
