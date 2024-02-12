import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaViewModelModule } from './viewModel/pizza-viewModel/pizza-viewModel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PizzaViewModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
