import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-customizer',
  standalone: false,
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomizerComponent implements OnInit {
  ngOnInit(): void {}
}
