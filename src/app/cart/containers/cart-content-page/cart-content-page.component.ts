import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartRow } from './../../../core/models/cart-row';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import * as cartActions from './../../actions/cart.actions';
import * as fromCart from './../../reducers'

@Component({
  selector: 'app-cart-content-page',
  templateUrl: './cart-content-page.component.html',
  styleUrls: ['./cart-content-page.component.css']
})
export class CartContentPageComponent implements OnInit {

  cartRows$: Observable<CartRow[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromCart.State>,
             private router:Router) {
    this.cartRows$ = this.store.select(fromCart.getCartRows);
    this.loading$ = this.store.select(fromCart.getCartLoading);
  }

  ngOnInit() {
    this.store.dispatch(new cartActions.LoadCart());
  }

  removeFromCart(row: CartRow) {
    this.store.dispatch(new cartActions.RemoveFromCart(row));
  }

  goToDetail(bookId){
    this.router.navigate(['/catalog/book',bookId])
  }

}
