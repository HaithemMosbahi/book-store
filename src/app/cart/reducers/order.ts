import { Order } from './../models/order-model';
import * as cartActions from './../actions/cart.actions';

export interface State {
    currentOrder: Order | null;
    loading: boolean;
}

export const initialState: State = {
    currentOrder: null,
    loading: false
}

export function reducer(state: State = initialState, action: cartActions.Actions) {
    switch (action.type) {
        case cartActions.CART_CHECKOUT:
            return { ...state, currentOrder: action.payload, loading: true };
        default:
            return state;
    }
}