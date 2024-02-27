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

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './invoiceOverview.component.html',
  styleUrl: './invoiceOverview.component.css',
  providers: [DialogService],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceOverviewComponent implements OnInit {
  constructor(
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private authService: AuthenticationService
  ) {}

  totalPrice!: number;
  orders: Order[] = [];
  currentUser!: User;

  ngOnInit(): void {
    this.orders = this.config.data.ordersProperty;
    this.totalPrice = this.config.data.totalPriceProperty;
    this.currentUser = this.authService.getCurrentUser(); 
  }
}
