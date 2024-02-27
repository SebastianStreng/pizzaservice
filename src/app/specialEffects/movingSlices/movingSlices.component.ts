import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-moving-slices',
  templateUrl: './movingSlices.component.html',
  styleUrl: './movingSlices.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovingSlicesComponent { }
