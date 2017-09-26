import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCart from './cart';
import * as fromOrder from './order';
import * as fromRoot from '../../core/reducers';


export interface CartState {
    cart: fromCart.State
    order: fromOrder.State
}

export interface State extends fromRoot.State {
    'cartModule': CartState
}

// Cart feature reducers ( cart and order )
export const reducers = {
    cart: fromCart.reducer,
    order: fromOrder.reducer
}

// Select the cart slice feature from the store 
export const getCartState = createFeatureSelector<CartState>('cartModule');

// Select cart slice
export const getCartContent = createSelector(
    getCartState,
    (state: CartState) => state.cart
)

export const getCartRows = createSelector(
    getCartContent,
    (state: fromCart.State) => state.rows
)

export const getCartTotal = createSelector(
    getCartContent,
    (state: fromCart.State) => state.total
)

export const getCartLoading = createSelector(
    getCartContent,
    (state: fromCart.State) => state.loading
);

// Select order slice
export const getOrder = createSelector(
    getCartState,
    (state: CartState) => state.order
)

export const getCurrentOrder = createSelector(
    getOrder,
    (state: fromOrder.State) => state.currentOrder
);

export const getOrderLoading = createSelector(
    getOrder,
    (state: fromOrder.State) => state.loading
);