import { Router } from '@angular/router';
import { CartService } from './../../core/services/cart.service';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import * as cartActions from './../actions/cart.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';


/**
 * Side effects service for cart module
 * 
 * @export
 * @class CartEffetcs
 */

@Injectable()
export class CartEffetcs {
    constructor(private actions$: Actions,
        private cartService: CartService,
        private router: Router) { }

    @Effect()
    loadCart = this.actions$
        .ofType(cartActions.LOAD_CART)
        .mergeMap(() => of(this.cartService.getCartRows()))
        .map(rows => new cartActions.LoadCartSuccess(rows))
        .catch(err => of(new cartActions.LoadCartFail({ error: err.message })));

    @Effect()
    removeBookFromCart = this.actions$
        .ofType(cartActions.REMOVE_FROM_CART)
        .map((action: cartActions.RemoveFromCart) => action.payload)
        .mergeMap((cartRow) => of(this.cartService.remove(cartRow)))
        .map(() => new cartActions.LoadCart())
        .catch(err => of(new cartActions.RemoveFromCartFail({ error: err.message })));


    @Effect()
    cartTotal = this.actions$
        .ofType(cartActions.GET_CART_TOTAL)
        .mergeMap((cartRow) => of(this.cartService.total()))
        .map((total) => new cartActions.GetCartTotalSuccess(total))
        .catch(err => of(new cartActions.GetCartTotalError({ error: err.message })));


    @Effect({ dispatch: false })
    checkout = this.actions$.ofType(cartActions.CART_CHECKOUT)
        .delay(1000)
        .map((action: cartActions.CartCheckout) => action.payload)
        .mergeMap(() => of(this.cartService.clear()))
        .do(() => this.router.navigate(['/cart/complete']));

}