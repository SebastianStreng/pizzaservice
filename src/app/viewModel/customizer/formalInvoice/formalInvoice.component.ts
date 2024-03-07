import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/interfaces/User';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-formal-invoice',
  templateUrl: './formalInvoice.component.html',
  styleUrl: './formalInvoice.component.css',
  providers: [DialogService],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormalInvoiceComponent implements OnInit {

  ref: DynamicDialogRef | undefined;

  totalPrice!: number; 
  orders: Order [] = [];
  user!: User; 

  constructor(
    public dialogService: DialogService,    
    public config: DynamicDialogConfig,){
    
  }

  ngOnInit(): void {
    this.getData(); 
  }

  getData (){
    this.orders = this.config.data.confirmedOrders; 
    this.totalPrice = this.config.data.confirmedTotalPrice; 
    this.user = this.config.data.confirmedUser; 
  }

}
