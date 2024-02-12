import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { PizzaViewModelComponent } from './pizza-viewModel.component';

@NgModule({
  declarations: [
    PizzaViewModelComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    PizzaViewModelComponent,
  ],
})
export class PizzaViewModelModule { }