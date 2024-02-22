import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = 'http://localhost/api';
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<any>(null);

  public loggedIn = this.loggedInSubject.asObservable();
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password }).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.loggedInSubject.next(true);
          this.updateCurrentUser();
        }
      }),
      catchError((error) => {
        console.error('Login failed:', error);

        // Gib die Antwort des Servers aus
        console.log('Server response:', error.error);

        throw error;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedInSubject.next(false);
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  private updateCurrentUser(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.http.get(`${this.baseUrl}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).subscribe(
        (user: any) => this.currentUserSubject.next(user),
        (error) => console.error('Failed to get current user:', error)
      );
    }
  }
}
