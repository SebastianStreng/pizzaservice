import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user-service/user-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html',
  styleUrl: './signIn.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  username!: string;
  password!: string;
  users: User[] = [];
  user!: User;

  error = '';
  success = '';

  constructor(
    public dialogService: DialogService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  signIn() {}

  getUsers(): void {
    this.userService.getAll().subscribe({
      next: (data: User[]) => {
        this.users = data;
        this.success = 'Successful retrieval of the users';
      },
      error: (err) => {
        console.error(err);
        this.error = 'An error occurred while fetching data';
      },
      complete: () => console.log('Users fetch complete'),
    });
  }
}
