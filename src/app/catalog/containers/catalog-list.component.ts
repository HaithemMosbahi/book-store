import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import * as fromCollection from './../reducers';
import { Store } from '@ngrx/store';
import { Book } from './../models/book';
import { Observable } from 'rxjs';
import * as catalogActions from './../actions/catalog.actions';

@Component({
  selector: 'app-catalog-list',
  template: `
    <div class="catalog-container">
      <div *ngIf="(books$ | async) as books" class="catalog-list">
        <app-catalog-item
          *ngFor="let book of books"
          [book]="book"
          (addToCart)="addBookToCart($event)"
          (bookDetails)="goToDetails($event)"
        ></app-catalog-item>
      </div>
      <mat-progress-spinner
        *ngIf="(loading$ | async)"
        color="primary"
        mode="indeterminate"
        value="50"
      >
      </mat-progress-spinner>
    </div>
  `,
  styles: [
    `
      .catalog-container {
        margin-left: 10%;
        margin-right: 10%;
        text-align: center;
      }

      .catalog-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      mat-progress-spinner {
        margin: 0 auto;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogListComponent implements OnInit {
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<fromCollection.State>,
    private router: Router
  ) {
    this.books$ = this.store.select(fromCollection.getCatalogContent);
    this.loading$ = this.store.select(fromCollection.getCatalogLoading);
  }

  ngOnInit() {
    // Dispatch the load action
    this.store.dispatch(new catalogActions.LoadBooks());
  }

  viewBook(bookId) {
    this.store.dispatch(new catalogActions.ViewBook(bookId));
  }

  addBookToCart(book: Book) {
    this.store.dispatch(new catalogActions.AddToCart(book));
  }

  goToDetails(book: Book) {
    this.router.navigate(['/catalog/book/', book.id]);
  }
}
