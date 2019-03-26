import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CartService } from './../services/cart.service';

import * as coreActions from './../actions/core.actions';

@Injectable()
export class CoreEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  @Effect()
  loadCart = this.actions$.pipe(
    ofType(coreActions.LOAD_CART_CONTENT),
    mergeMap(() => {
      const result = {
        count: this.cartService.count(),
        total: this.cartService.total()
      };
      return of(result);
    }),
    map(result => new coreActions.LoadCartContentSuccess(result))
  );
}
