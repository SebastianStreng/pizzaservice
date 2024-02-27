import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PasswordModule } from 'primeng/password';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { ViewModelModule } from '../viewModel/viewModel.module';
import { MovingSlicesComponent } from '../specialEffects/movingSlices/movingSlices.component';
import { RegisterComponent } from './landingpage/register/register.component';
import { SignInComponent } from './landingpage/signIn/signIn.component';




@NgModule({
  declarations: [
    LandingpageComponent,
    MovingSlicesComponent,
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ViewModelModule,
    DynamicDialogModule,
    PasswordModule
  ],
  exports: [LandingpageComponent],
})
export class LandingModel {}
