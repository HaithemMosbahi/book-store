import { CartService } from './../services/cart.service';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as coreActions from './../actions/core.actions';

import { of } from 'rxjs/Observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class CoreEffects {

    constructor(private actions$: Actions,
        private cartService: CartService) { }


    @Effect()
    loadCart = this.actions$.ofType(coreActions.LOAD_CART_CONTENT)
        .mergeMap(() => {
            let result = {
                count: this.cartService.count(),
                total: this.cartService.total()
            }
            return of(result)
        }).map(result => new coreActions.LoadCartContentSuccess(result));
}