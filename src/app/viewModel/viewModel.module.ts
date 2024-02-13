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

import { PizzaViewModelComponent } from './pizza-viewModel/pizza-viewModel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PizzaService } from '../services/pizza-service/pizza-service';
import { CustomizerComponent } from './customizer/customizer.component';

@NgModule({
  declarations: [PizzaViewModelComponent, NavbarComponent, CustomizerComponent],
  imports: [
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
    TabMenuModule
  ],
  exports: [PizzaViewModelComponent, NavbarComponent, CustomizerComponent],
})
export class ViewModelModule {}
