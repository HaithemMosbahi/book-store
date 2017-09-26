import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  template: `<button (click)="addToCart.emit()"> Add To Cart </button>`
})
export class AddToCartComponent {

  @Output() addToCart: EventEmitter<any> = new EventEmitter();

  constructor() { }


}
