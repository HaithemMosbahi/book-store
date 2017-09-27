import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-cart',
    template: `
    <a routerLink="/cart/content"> 
    <i class="material-icons md-48 cart">shopping_cart</i>   
    </a> 
  `,
    styles: [
        `
    .cart {
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 15px;
        margin-right: 15px;
        font-size: 40px !important;
        color: black;
    }
    `
    ]
})
export class CartComponent {

    @Input() count: number = 0;


}
