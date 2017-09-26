import { Router } from '@angular/router';
import { BookNav } from './../../models/book-nav';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Book } from './../../models/book';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as catalogActions from "./../../actions/catalog.actions";
import * as fromBook from './../../reducers';


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPageComponent implements OnInit {

  bookId: string;
  selectedBook$: Observable<Book>;
  loading$: Observable<boolean>;

  current$: Observable<number>;
  count$: Observable<number>;
  nextId: string;
  previousId: string;

  messages = [
    {
      from:'ddddsf sfsfsfsdf dff',
      subject:'aaasslqksdj sdjksdj lqsjd ',
      content:'ccc sqkdjklsqdj lqs jdlqsdjlqsd jsql djqlsdjlqsdjsqd'
    },
    {
      from:'aaa',
      subject:'bbb',
      content:'kjd lj elzjkljdlqsjdlqsdjqlsdjsqldjqsldjqsljkd qsd '
    },
    {
      from:'aaa',
      subject:'bbb',
      content:'jdjqsk dqjd klsq djksqldsqldjsqldjqskldj'
    }
  ]
  constructor(private store: Store<fromBook.CatalogState>, private route: ActivatedRoute,
    private router: Router) {
    this.selectedBook$ = this.store.select(fromBook.getSelectedBook);
    this.loading$ = this.store.select(fromBook.getBookLoading);
    this.current$ = this.store.select(fromBook.getCurrent);
    this.count$ = this.store.select(fromBook.getTotal);

    // subscribe to nextId and previousId changes 
    this.store.select(fromBook.getNextId).subscribe(nextId => {
      this.nextId = nextId;
    });

    this.store.select(fromBook.getPreviousId).subscribe(previousId => {
      this.previousId = previousId;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
      this.store.dispatch(new catalogActions.ViewBook(this.bookId));
    })
  }

  nextBook() {
    console.log('on next book');
    if (this.nextId)
      this.router.navigate(['/catalog/book', this.nextId]);

  }


  previousBook() {
    console.log('on previous book');
    if (this.previousId)
      this.router.navigate(['/catalog/book', this.previousId]);
  }

  addBookToCart(book: Book) {
    this.store.dispatch(new catalogActions.AddToCart(book));
  }

}
