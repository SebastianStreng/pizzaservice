import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentification-service/authentification-service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router) {}

  signOut() {
    this.authService.logout();
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['Landing']);
    }
  }

  ngOnInit(): void {}
}
