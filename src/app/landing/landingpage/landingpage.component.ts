import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
  providers: [DialogService]
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingpageComponent implements OnInit {

  constructor(public dialogService: DialogService){}

openSignInDialog (){

}

openRegisterDialog(){

}

  ngOnInit(): void { }

}
