import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landing/landingpage/landingpage.component';
import { CustomizerComponent } from './viewModel/customizer/customizer.component';

const routes: Routes = [
  { path: '', redirectTo: 'Landing', pathMatch: 'full' }, // Standardroute
  { path: 'Customize', component: CustomizerComponent },
  { path: 'Landing', component: LandingpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


