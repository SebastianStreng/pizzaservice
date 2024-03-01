import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserService } from 'src/app/services/user-service/user-service';
import { AuthenticationService } from 'src/app/services/authentification-service/authentification-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [DialogService],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  id!: number;
  username!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  streetname!: string;
  housenumber!: number;
  postalCode!: string;
  cityname!: string;

  users: User[] = [];
  user!: User;

  error = '';
  success = '';

  constructor(
    public dialogService: DialogService,
    private userService: UserService,
    private authService: AuthenticationService,
    public ref: DynamicDialogRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  register() {
    const newUser: User = {
      id: (this.id = 0),
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      streetName: this.streetname,
      houseNumber: this.housenumber.toString(),
      postalCode: this.postalCode,
      city: this.cityname,
    };
    this.addUser(newUser);
  }

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

  addUser(userToAdd: User) {
    this.resetAlerts();

    if (this.isUserAlreadyExists(userToAdd)) {
      this.error = ('User with the same username and first name already exists.');
      console.log(this.error);
      return;
    }

    this.userService.store(userToAdd).subscribe(
      (res: User) => {
        this.users.push(res);
        this.success = 'Created User successfully'
        this.ref.close();
      },
      (err) => (this.error = err.message)
    );
  }

  private isUserAlreadyExists(newUser: User): boolean {
    return this.users.some(
      (user) =>
      user.username === newUser.username ||
        user.username === newUser.username &&
        user.firstName === newUser.firstName ||
        user.firstName === newUser.firstName &&
        user.lastName === newUser.lastName &&
        user.streetName === newUser.streetName &&
        user.houseNumber === newUser.houseNumber
    );
  }


  updateUser(name: any, price: any, id: any) {
    this.resetAlerts();

    this.userService
      .update({
        id: this.id,
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        streetName: this.streetname,
        houseNumber: this.housenumber.toString(),
        postalCode: this.postalCode,
        city: this.cityname,
      })
      .subscribe(
        (res) => {
          this.success = 'Updated successfully';
        },
        (err) => (this.error = err)
      );
  }

  resetAlerts() {
    this.error = '';
    this.success = '';
  }
}
