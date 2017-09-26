import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as cartActions from './../../actions/cart.actions';
import * as fromCart from './../../reducers';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  loading$:Observable<boolean>;

  constructor(private store: Store<fromCart.State>) {
    this.loading$ = this.store.select(fromCart.getOrderLoading);
   }

  ngOnInit() {

  }

  submitOrder(order) {
    this.store.dispatch(new cartActions.CartCheckout(order));
  }
}
