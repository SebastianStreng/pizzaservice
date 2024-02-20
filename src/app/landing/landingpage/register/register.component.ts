import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  
  id! : number; 
  username!: string;
  password!: string;  
  firstName!: string;
  lastName!: string;
  streetname!: string; 
  housenumber!: number; 
  postalCode!: string; 
  cityname!: string;  

  ngOnInit(): void { }

}
