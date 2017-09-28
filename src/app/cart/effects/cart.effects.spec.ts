import { Observable } from 'rxjs/Observable';
import { CartService } from './../../core/services/cart.service';
import { CartEffetcs } from './cart.effects';
import { Actions } from '@ngrx/effects';
import { hot } from 'jasmine-marbles';
import { toPromise } from 'rxjs/operator/toPromise';
import { toArray } from 'rxjs/operator/toArray';

import * as cartActions from './../actions/cart.actions'


fdescribe('Cart Effects', () => {

    it('should load the content of the cart ', async () => {
        // construct actions stream using marbles
        const actions = new Actions(hot('-a--b-|', { a: { type: cartActions.LOAD_CART },b:{type:cartActions.CART_CHECKOUT} }));
        //const service = stubService('expected');
        const cartService = new CartService();
        const effects = new CartEffetcs(actions, cartService, undefined);

        // use async await to simulate the behaviour of async call
        expect(await read(effects.loadCart)).toEqual(
            new cartActions.LoadCartSuccess([])
        );
    });

    function stubCartService(response: any): any {
        const service = jasmine.createSpyObj('service', ['getCartRows']);

        return service;
    }




});

export function read<T>(o: Observable<T>): Promise<T> {
    return toPromise.call(o);
}