import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';


import { InvoiceOverviewComponent } from './invoiceOverview/invoiceOverview.component';


@NgModule({
  declarations: [InvoiceOverviewComponent],
  imports: [
    FormsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    TableModule,
    InputTextModule
  ],
  exports: [InvoiceOverviewComponent],
})
export class DialogModel {}
