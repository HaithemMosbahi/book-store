import { Router } from '@angular/router';
import { CartService } from './../../core/services/cart.service';
import { BooksService } from './../../core/services/books.service';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

import * as catalogActions from './../actions/catalog.actions';
import { CatalogService } from './../services/books.service';

import { of } from 'rxjs/Observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';


@Injectable()
export class CatalogEffects {

    constructor(private actions$: Actions, private booksService: BooksService,
              private cartService:CartService, private router:Router) { }

    /**
     * Load Books effects 
     * 
     * @memberof CatalogEffects
     */
    @Effect()
    loadBooks = this.actions$
        .ofType(catalogActions.LOAD_BOOKS)
        .mergeMap(() => this.booksService.fetchBooks())
        .map(books => new catalogActions.LoadBooksSuccess(books))
        .catch((err) => of(new catalogActions.LoadBooksFail({ error: err.message })));


    @Effect()
    getBook = this.actions$
        .ofType(catalogActions.VIEW_BOOK)
        .map((action: catalogActions.ViewBook) => action.payload)
        .mergeMap((selectedBook) => this.booksService.getBook(selectedBook))
        .map(book => new catalogActions.ViewBookSuccess(book))
        .catch((err) => of(new catalogActions.ViewBookFail({ error: err.message })));


    @Effect({dispatch:false})
    addBookToCart = this.actions$
        .ofType(catalogActions.ADD_BOOK_TO_CART)
        .map((action:catalogActions.AddToCart) => action.payload)
        .mergeMap((book) => of(this.cartService.add(book)))
        .do(() => this.router.navigate(['/cart/content']));
}