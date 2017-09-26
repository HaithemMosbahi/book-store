import { Action } from '@ngrx/store';

export const LOAD_CART_CONTENT = '[Core] get cart';
export const LOAD_CART_CONTENT_SUCCESS = '[Core] get cart success';

export class LoadCartContent implements Action {
  readonly type = LOAD_CART_CONTENT;
}

export class LoadCartContentSuccess implements Action {
  readonly type = LOAD_CART_CONTENT_SUCCESS;
  constructor(public payload:any){}
}

export type Actions = LoadCartContent | LoadCartContentSuccess;