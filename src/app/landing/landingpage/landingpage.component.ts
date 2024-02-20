import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SignInComponent } from './signIn/signIn.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
  providers: [DialogService]
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingpageComponent implements OnInit {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService){}

openSignInDialog (){
  this.ref = this.dialogService.open(SignInComponent, { header: 'Please type in your Username and Password to proceed'});
}

openRegisterDialog(){
  this.ref = this.dialogService.open(RegisterComponent, { header: 'Please register to order your first custom Pizza'});
}

  ngOnInit(): void { }

}
