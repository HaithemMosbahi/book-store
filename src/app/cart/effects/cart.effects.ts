import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { tap, delay, mergeMap, map, catchError } from 'rxjs/operators';

import * as cartActions from './../actions/cart.actions';
import { CartService } from './../../core/services/cart.service';

/**
 * Side effects service for cart module
 *
 * @export
 * @class CartEffetcs
 */

@Injectable()
export class CartEffetcs {
  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private router: Router
  ) {}

  @Effect()
  loadCart = this.actions$.pipe(
    ofType(cartActions.LOAD_CART),
    mergeMap(() => of(this.cartService.getCartRows())),
    map(rows => new cartActions.LoadCartSuccess(rows)),
    catchError(err => of(new cartActions.LoadCartFail({ error: err.message })))
  );

  @Effect()
  removeBookFromCart = this.actions$.pipe(
    ofType(cartActions.REMOVE_FROM_CART),
    map((action: cartActions.RemoveFromCart) => action.payload),
    mergeMap(cartRow => of(this.cartService.remove(cartRow))),
    map(() => new cartActions.LoadCart()),
    catchError(err =>
      of(new cartActions.RemoveFromCartFail({ error: err.message }))
    )
  );

  @Effect()
  cartTotal = this.actions$.pipe(
    ofType(cartActions.GET_CART_TOTAL),
    mergeMap(cartRow => of(this.cartService.total())),
    map(total => new cartActions.GetCartTotalSuccess(total)),
    catchError(err =>
      of(new cartActions.GetCartTotalError({ error: err.message }))
    )
  );

  @Effect({ dispatch: false })
  checkout = this.actions$.pipe(
    ofType(cartActions.CART_CHECKOUT),
    delay(1000),
    map((action: cartActions.CartCheckout) => action.payload),
    mergeMap(() => of(this.cartService.clear())),
    tap(() => this.router.navigate(['/cart/complete']))
  );
}
