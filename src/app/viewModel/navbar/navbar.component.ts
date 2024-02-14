import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  AddToCart() {}

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pizza',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'About Us',
        icon: 'pi pi-fw pi-user',
      },
    ];
  }
}
