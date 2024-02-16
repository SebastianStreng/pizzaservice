import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './invoiceOverview.component.html',
  styleUrl: './invoiceOverview.component.css',
  providers: [DialogService]
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceOverviewComponent implements OnInit {

  constructor(private ref: DynamicDialogRef, public config: DynamicDialogConfig){}

  firstName!: string;
  lastName!: string;
  streetname!: string; 
  housenumber!: number; 
  postalCode!: string; 
  cityname!: string;  

  totalPrice! : number; 
  orders: order[] = []; 


  ngOnInit(): void {
    this.orders = this.config.data.ordersProperty; 
    this.totalPrice = this.config.data.totalPriceProperty; 
   }

}
