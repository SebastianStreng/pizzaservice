import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewModelModule } from './viewModel/viewModel.module';
import { DialogModel } from './dialogs/dialogs.module';
import { LandingModel } from './landing/landing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModelModule,
    DialogModel,
    LandingModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
