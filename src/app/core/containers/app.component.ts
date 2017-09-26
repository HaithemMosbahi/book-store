import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
       <app-logo></app-logo>
       <app-cart></app-cart>
        <app-menu>
        </app-menu>
         <router-outlet></router-outlet>
    `
})
export class AppComponent {
}
