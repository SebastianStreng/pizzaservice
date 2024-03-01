import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DataViewModule } from 'primeng/dataview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PickListModule } from 'primeng/picklist';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';

import { NavbarComponent } from './navbar/navbar.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { MovingSlicesComponent } from '../specialEffects/movingSlices/movingSlices.component';
import { InvoiceOverviewComponent } from './customizer/invoiceOverview/invoiceOverview.component';


@NgModule({
  declarations: [InvoiceOverviewComponent, NavbarComponent, CustomizerComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule,
    DataViewModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    PickListModule,
    CardModule,
    TabMenuModule,
    InputTextareaModule,
    InputTextModule,
    DynamicDialogModule
  ],
  exports: [ NavbarComponent, CustomizerComponent],
})
export class ViewModelModule {}
