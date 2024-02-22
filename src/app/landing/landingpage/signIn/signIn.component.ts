import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentification-service/authentification-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css'],
})
export class SignInComponent implements OnInit {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {}

  signIn() {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['Customize']);
      },
      (error) => {
        this.error = 'Invalid username or password';
      }
    );
  }
}
