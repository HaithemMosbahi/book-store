import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <nav mat-tab-nav-bar aria-label="weather navigation links">
      <a
        mat-tab-link
        *ngFor="let routeLink of routeLinks; let i = index"
        [routerLink]="routeLink.link"
        [active]="activeLinkIndex === i"
        (click)="activeLinkIndex = i"
      >
        {{ routeLink.label }}
      </a>
    </nav>
  `,
  styles: [
    `
      :host {
        margin-top: 30px;
      }
    `
  ]
})
export class MenuComponent {
  routeLinks: any[];
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.routeLinks = [
      { label: 'Catalog', link: '/catalog/list' },
      { label: 'Cart', link: '/cart/content' },
      { label: 'Order', link: '/cart/order' }
    ];
  }
}
