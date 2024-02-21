import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html',
  styleUrl: './signIn.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  username!: string;
  password!: string;

  ngOnInit(): void {}

  signIn() {}
}
