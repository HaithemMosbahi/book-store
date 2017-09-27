import { CartRow } from './../../core/models/cart-row';
import * as cartActions from './../actions/cart.actions'

export interface State {
    rows: CartRow[];
    total: number;
    loading: boolean;
}

export const initialState: State = {
    rows: [],
    total: 0,
    loading: false
}

/**
 * Reducer function related to the cart feature 
 * 
 * @export
 * @param {State} [state=initialState] 
 * @param {cartActions.Actions} action 
 * @returns 
 */
export function reducer(state: State = initialState, action: cartActions.Actions) {
    switch (action.type) {
        case cartActions.LOAD_CART:
            return { ...state, loading: true };
        case cartActions.LOAD_CART_SUCCESS:
            return { ...state, rows: action.payload, loading: false }
        case cartActions.GET_CART_TOTAL_SUCCESS:
            return { ...state, total: action.payload } 
        default:
            return state;
    }
}


export const cartContent = (state: State) => state.rows;

export const total = (state: State) => state.total;

export const loading = (state: State) => state.loading;