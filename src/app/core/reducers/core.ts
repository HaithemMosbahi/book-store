import { LOAD_CART_SUCCESS } from './../../cart/actions/cart.actions';
import * as core from '../actions/core.actions';

export interface State {
  count: number;
  total: number;
}

const initialState: State = {
  count : 0,
  total: 0
};

export function reducer(state = initialState, action: core.Actions): State {
  switch (action.type) {
    case core.LOAD_CART_CONTENT:
      return initialState;

    case core.LOAD_CART_CONTENT_SUCCESS:
      return {
        count: action.payload.count,
        total: action.payload.total
      };

    default:
      return state;
  }
}

export const getCount = (state: State) => state.count;
export const getTotal = (state: State) => state.total;