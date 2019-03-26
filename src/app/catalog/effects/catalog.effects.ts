import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { CartService } from './../../core/services/cart.service';

import { of } from 'rxjs';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';

import * as catalogActions from './../actions/catalog.actions';
import { BooksService } from './../../core/services/books.service';

@Injectable()
export class CatalogEffects {
  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private cartService: CartService,
    private router: Router
  ) {}

  /**
   * Load Books effects
   *
   * @memberof CatalogEffects
   */
  @Effect()
  loadBooks = this.actions$.pipe(
    ofType(catalogActions.LOAD_BOOKS),
    mergeMap(() => this.booksService.fetchBooks()),
    map(books => new catalogActions.LoadBooksSuccess(books)),
    catchError(err =>
      of(new catalogActions.LoadBooksFail({ error: err.message }))
    )
  );

  @Effect()
  getBook = this.actions$.pipe(
    ofType(catalogActions.VIEW_BOOK),
    map((action: catalogActions.ViewBook) => action.payload),
    mergeMap(selectedBook => this.booksService.getBook(selectedBook)),
    map(book => new catalogActions.ViewBookSuccess(book)),
    catchError(err =>
      of(new catalogActions.ViewBookFail({ error: err.message }))
    )
  );

  @Effect({ dispatch: false })
  addBookToCart = this.actions$.pipe(
    ofType(catalogActions.ADD_BOOK_TO_CART),
    map((action: catalogActions.AddToCart) => action.payload),
    mergeMap(book => of(this.cartService.add(book))),
    tap(() => this.router.navigate(['/cart/content']))
  );
}
