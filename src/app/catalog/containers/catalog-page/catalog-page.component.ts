import * as fromCollection from './../../reducers';
import { Store } from '@ngrx/store';
import { CatalogService } from './../../services/books.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as catalogActions from "./../../actions/catalog.actions";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {

  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromCollection.State>) {
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

}
