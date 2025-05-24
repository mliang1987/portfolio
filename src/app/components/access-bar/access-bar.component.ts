import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-access-bar',
  imports: [CommonModule, MenubarModule, ButtonModule, InputTextModule, BadgeModule, OverlayBadgeModule, RippleModule],
  standalone: true,
  templateUrl: './access-bar.component.html',
  styleUrl: './access-bar.component.css'
})
export class AccessBarComponent {
  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: ['/home'] },
    {
      label: 'Projects',
      icon: 'pi pi-briefcase',
      badge: '2',
      items: [
        { label: 'ProjectA', icon: 'pi pi-user', routerLink: ['/projects/projectA'] },
        { label: 'ProjectB', icon: 'pi pi-lock', routerLink: ['/projects/projectB'] }
      ]
    },
    { label: 'Contact', icon: 'pi pi-envelope', routerLink: ['/contact'] }
  ];
}
