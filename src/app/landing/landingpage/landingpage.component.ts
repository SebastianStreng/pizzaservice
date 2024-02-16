import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingpageComponent implements OnInit {

  ngOnInit(): void { }

}
