import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { ViewModelModule } from '../viewModel/viewModel.module';

@NgModule({
  declarations: [LandingpageComponent],
  imports: [
    FormsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ViewModelModule
  ],
  exports: [LandingpageComponent],
})
export class LandingModel {}
