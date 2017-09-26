import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-catalog-root',
    template: `
        <router-outlet></router-outlet>
    `
})

export class CatalogRootComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}