import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './invoiceOverview.component.html',
  styleUrl: './invoiceOverview.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceOverviewComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  streetname!: string; 
  housenumber!: number; 
  postalCode!: string; 
  cityname!: string;  

  totalPrice! : number; 
  orders: order[] = []; 


  ngOnInit(): void { }

}
