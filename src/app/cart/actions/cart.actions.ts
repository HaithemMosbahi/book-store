import { Order } from './../models/order-model';
import { CartRow } from './../../core/models/cart-row';
import { Action } from '@ngrx/store';


export const LOAD_CART = '[Cart] load';
export const LOAD_CART_SUCCESS = '[Cart] load success';
export const LOAD_CART_FAIL = '[Cart] load fail';


export const ADD_TO_CART = '[Cart] add';
export const ADD_TO_CART_SUCCESS = '[Cart] add success'
export const ADD_TO_CART_FAIL = '[Cart] add fail'

export const REMOVE_FROM_CART = '[Cart] add';
export const REMOVE_FROM_CART_SUCCESS = '[Cart] add success';
export const REMOVE_FROM_CART_FAIL = '[Cart] add fail';

export const CART_CHECKOUT = '[Cart] checkout';
export const CART_CHECKOUT_SUCCESS = '[Cart] checkout success';
export const CART_CHECKOUT_ERROR = '[Cart] checkout error';

export const GET_CART_TOTAL = '[Cart] get total';
export const GET_CART_TOTAL_SUCCESS = '[Cart] get total success';
export const GET_CART_TOTAL_ERROR = '[Cart] get total error';

/**
 * Load Cart Action
 * 
 * @export
 * @class LoadCart
 * @implements {Action}
 */
export class LoadCart implements Action {
    readonly type = LOAD_CART;
    constructor(public payload?: any) { }
}


export class LoadCartSuccess implements Action {
    readonly type = LOAD_CART_SUCCESS;
    constructor(public payload: CartRow[]) { }
}


export class LoadCartFail implements Action {
    readonly type = LOAD_CART_SUCCESS;
    constructor(public payload: any) { }
}


export class RemoveFromCart implements Action {
    readonly type = REMOVE_FROM_CART;
    constructor(public payload: CartRow) { }
}

export class RemoveFromCartSuccess implements Action {
    readonly type = REMOVE_FROM_CART_SUCCESS;
    constructor(public payload?: any) { }
}

export class RemoveFromCartFail implements Action {
    readonly type = REMOVE_FROM_CART_FAIL;
    constructor(public payload?: any) { }
}

export class CartCheckout implements Action {
    readonly type = CART_CHECKOUT;
    constructor(public payload: Order) { }
}

export class CartCheckoutSuccess implements Action {
    readonly type = CART_CHECKOUT_SUCCESS;
    constructor(public payload?: any) { }
}

export class CartCheckoutFail implements Action {
    readonly type = CART_CHECKOUT_ERROR;
    constructor(public payload?: any) { }
}

export class GetCartTotal implements Action {
    readonly type = GET_CART_TOTAL;
}

export class GetCartTotalSuccess implements Action {
    readonly type = GET_CART_TOTAL_SUCCESS;
    constructor(public payload: number) { }
}

export class GetCartTotalError implements Action {
    readonly type = GET_CART_TOTAL_ERROR;
    constructor(public payload?: any) { }
}

export type Actions = LoadCart | LoadCartSuccess | LoadCartFail |
    RemoveFromCart | RemoveFromCartSuccess | RemoveFromCartFail |
    CartCheckout | CartCheckoutSuccess | CartCheckoutFail |
    GetCartTotal | GetCartTotalSuccess | GetCartTotalError;