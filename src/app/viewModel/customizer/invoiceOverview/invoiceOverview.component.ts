import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { User } from 'src/app/interfaces/User';
import { Order } from 'src/app/interfaces/order';
import { AuthenticationService } from 'src/app/services/authentification-service/authentification-service';
import { FormalInvoiceComponent } from '../formalInvoice/formalInvoice.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './invoiceOverview.component.html',
  styleUrl: './invoiceOverview.component.css',
  providers: [DialogService],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceOverviewComponent implements OnInit {
  constructor(
    public dialogService: DialogService,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private authService: AuthenticationService,
    private router : Router
  ) {}

  totalPrice!: number;
  orders: Order[] = [];
  firstName!: string; 
  lastName! : string; 
  streetName!: string; 
  houseNumber!: string;
  postalcode!: string; 
  cityName!: string; 
   //need to write dynamic dialog with bestätigung
  currentUser!: User;

  ngOnInit(): void {
    this.orders = this.config.data.ordersProperty;
    this.totalPrice = this.config.data.totalPriceProperty;
    this.currentUser = this.authService.getCurrentUser();
    this.firstName = this.currentUser.firstName;  
    this.lastName = this.currentUser.lastName; 
    this.streetName = this.currentUser.streetName;
    this.houseNumber = this.currentUser.houseNumber;
    this.postalcode= this.currentUser.postalCode;
    this.cityName = this.currentUser.city; 

    console.log("current User:", this.currentUser)
  }

  orderNow(){
    const newUser: User = {
      username: this.currentUser.username,
      id: this.currentUser.id,
      password : '',
      firstName: this.firstName,
      lastName: this.lastName,
      streetName:this.streetName,
      houseNumber: this.houseNumber,
      postalCode: this.postalcode,
      city: this.cityName
    }

    this.ref.close(); 

    this.show(newUser)

    this.router.navigate(['Customize']);

  }

  show(user: User) {
    this.ref = this.dialogService.open(FormalInvoiceComponent, {
      data: {
        confirmedUser: user,
        confirmedOrders: this.orders,
        confirmedTotalPrice: this.totalPrice
      },
      header: 'Your Order',
      width: '60%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    this.ref.onClose.subscribe();
  }
}
