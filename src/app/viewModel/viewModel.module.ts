import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DataViewModule } from 'primeng/dataview';



import { PizzaViewModelComponent } from './pizza-viewModel/pizza-viewModel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PizzaService } from '../services/pizza-service/pizza-service';

@NgModule({
  declarations: [
    PizzaViewModelComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule,
    DataViewModule,
  ],
  exports: [
    PizzaViewModelComponent,
    NavbarComponent
  ],
})
export class ViewModelModule { 
  
}