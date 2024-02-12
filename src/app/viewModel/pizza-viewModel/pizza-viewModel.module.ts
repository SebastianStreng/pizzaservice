import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';



import { PizzaViewModelComponent } from './pizza-viewModel.component';

@NgModule({
  declarations: [
    PizzaViewModelComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule
  ],
  exports: [
    PizzaViewModelComponent,
  ],
})
export class PizzaViewModelModule { }