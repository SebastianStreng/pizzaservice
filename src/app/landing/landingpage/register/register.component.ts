import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserService } from 'src/app/services/user-service/user-service';

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
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  register() {
    const newUser: User = {
      id: this.id = 0,
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

    //close window or go to another one
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
    this.userService.store(userToAdd).subscribe(
      (res: User) => {
        // Update the list of cars
        this.users.push(res);
        // Inform the user
        this.success = 'Created User successfully';
      },
      (err) => (this.error = err.message)
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
