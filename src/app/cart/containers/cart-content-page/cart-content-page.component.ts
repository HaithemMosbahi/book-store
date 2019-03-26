import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartRow } from './../../../core/models/cart-row';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as cartActions from './../../actions/cart.actions';
import * as fromCart from './../../reducers'

@Component({
  selector: 'app-cart-content-page',
  templateUrl: './cart-content-page.component.html',
  styleUrls: ['./cart-content-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class CartContentPageComponent implements OnInit {

  cartRows$: Observable<CartRow[]>;
  loading$: Observable<boolean>;
  total$: Observable<number>;

  constructor(private store: Store<fromCart.State>,
             private router:Router) {
    this.cartRows$ = this.store.select(fromCart.getCartRows);
    this.loading$ = this.store.select(fromCart.getCartLoading);
    this.total$ = this.store.select(fromCart.getCartTotal);
  }

  ngOnInit() {
    this.store.dispatch(new cartActions.LoadCart());
    this.store.dispatch(new cartActions.GetCartTotal());
  }

  removeFromCart(row: CartRow) {
    this.store.dispatch(new cartActions.RemoveFromCart(row));
    // recalculate the total
    this.store.dispatch(new cartActions.GetCartTotal());    
  }

  goToDetail(bookId){
    this.router.navigate(['/catalog/book',bookId])
  }

  rowQuantityChanged(quantity){
    // Trigger cart total to recalculate the total
    this.store.dispatch(new cartActions.GetCartTotal());
  }

}
