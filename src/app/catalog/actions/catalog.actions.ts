import { BookNav } from './../models/book-nav';
import { Book } from './../models/book';
import { Action } from '@ngrx/store';

export const LOAD_BOOKS = '[Catalog] Load';
export const LOAD_BOOKS_SUCCESS = '[Catalog] Load Success';
export const LOAD_BOOKS_FAIL = '[Catalog] Load Fail';

export const SELECT_BOOK = '[Catalog] Select';

export const VIEW_BOOK = '[Book] Load';
export const VIEW_BOOK_SUCCESS = '[Book] Load Success';
export const VIEW_BOOKS_FAIL = '[Book] Load Fail';


export const ADD_BOOK_TO_CART = '[Book] add';
export const ADD_BOOK_TO_CART_SUCCESS = '[Book] add success'
export const ADD_BOOK_TO_CART_FAIL = '[Book] add fail'

/**
 * Load Catalog Actions
 */
export class LoadBooks implements Action {
    readonly type = LOAD_BOOKS;
}

export class LoadBooksSuccess implements Action {
    readonly type = LOAD_BOOKS_SUCCESS;

    constructor(public payload: Book[]) { }
}

export class LoadBooksFail implements Action {
    readonly type = LOAD_BOOKS_FAIL;

    constructor(public payload: any) { }
}

export class SelectBook implements Action {
    readonly type = SELECT_BOOK;

    constructor(public payload: any) { }
}

/**
 * view book action
 * 
 * @export
 * @class ViewBook
 * @implements {Action}
 */
export class ViewBook implements Action {
    readonly type = VIEW_BOOK;
    constructor(public payload: any) { }

}

export class ViewBookSuccess implements Action {
    readonly type = VIEW_BOOK_SUCCESS;

    constructor(public payload: BookNav) { }
}

export class ViewBookFail implements Action {
    readonly type = VIEW_BOOKS_FAIL;

    constructor(public payload: any) { }
}

/**
 * Action Add To Cart, dispatched when the user add a product
 * to the cart
 * 
 * @export
 * @class AddToCart
 * @implements {Action}
 */
export class AddToCart implements Action {
    readonly type = ADD_BOOK_TO_CART;
    constructor(public payload: Book) { }
}

export class AddToCartSuccess implements Action {
    readonly type = ADD_BOOK_TO_CART_SUCCESS;
    constructor(public payload?: any) { }
}

export class AddToCartFail implements Action {
    readonly type = ADD_BOOK_TO_CART_FAIL;
    constructor(public payload?: any) { }
}


// export a new type that represents the ctalog actions 
export type ActionType = LoadBooks | LoadBooksSuccess | LoadBooksFail
    | ViewBook | ViewBookSuccess | ViewBookFail | SelectBook
    | AddToCart | AddToCartSuccess | AddToCartFail;

